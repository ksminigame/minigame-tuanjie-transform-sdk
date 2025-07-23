
using LitJson;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace KSWASM.editor
{
  public class BuildTemplate
  {
    private readonly string baseTemplateDirectory = "";
    private readonly string customTemplateDirectory = "";
    private readonly string outputDirectory = "";
    public static List<string> excludedFilePatterns = new List<string>();
    private static readonly string[] configurationFiles = new string[2]
    {
      "game.json",
      "project.config.json"
    };

     public static string[] DetectTemplateConflicts(
      string baseTemplateDir,
      string customTemplateDir,
      string[] filePatterns = null)
    {
      if (!HasMinigameDirectory(customTemplateDir))
        return new string[0];
      if (filePatterns == null)
        filePatterns = new string[0];
      string minigameDirectory = Path.Combine(customTemplateDir, "minigame");
      string[] allFiles = UnityUtil.ScanDirFiles(minigameDirectory).ToArray();
      int pathPrefixLength = minigameDirectory.Length + 1;
      string conflictFilePath = Path.Combine(customTemplateDir, "conflict.json");
      string existingConflictJson = ReadFileContent(conflictFilePath);
      JsonData existingConflicts = ParseConflictJson(existingConflictJson);
      JsonData newConflicts = new JsonData();
      newConflicts.SetJsonType(JsonType.Object);
      List<string> conflictingFiles = new List<string>();
      List<string> configFilePatterns = BuildConfigFilePatterns();
      foreach (string filePath in allFiles)
      {
        if (!ShouldProcessFile(filePath, filePatterns, configFilePatterns, minigameDirectory, pathPrefixLength))
          continue;
        string relativePath = filePath.Substring(pathPrefixLength);
        string baseTemplatePath = Path.Combine(baseTemplateDir, relativePath);
        if (File.Exists(baseTemplatePath))
        {
          ProcessFileConflict(filePath, baseTemplatePath, relativePath, existingConflicts, newConflicts, conflictingFiles);
        }
      }
      UpdateConflictFile(conflictFilePath, newConflicts, conflictingFiles);
      return conflictingFiles.ToArray();
    }

    private static string ReadFileContent(string filePath)
    {
      if (!File.Exists(filePath))
        return string.Empty;
      using (FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
      using (StreamReader streamReader = new StreamReader(fileStream))
      {
        return streamReader.ReadToEnd();
      }
    }

    private static JsonData ParseConflictJson(string jsonContent)
    {
      try
      {
        return string.IsNullOrEmpty(jsonContent) ? new JsonData() : JsonMapper.ToObject(jsonContent);
      }
      catch (Exception)
      {
        return new JsonData();
      }
    }

    private static List<string> BuildConfigFilePatterns()
    {
      List<string> patterns = new List<string>();
      foreach (string configFile in configurationFiles)
      {
        patterns.Add(@".*[\\/]" + configFile + "$");
      }
      return patterns;
    }

    private static bool ShouldProcessFile(
      string filePath, 
      string[] filePatterns, 
      List<string> configPatterns,
      string minigameDirectory, 
      int pathPrefixLength)
    {
      return MatchesPattern(filePath, filePatterns) 
        && !MatchesPattern(filePath, configPatterns.ToArray())
        && filePath.IndexOf(minigameDirectory) == 0 
        && filePath.Length > pathPrefixLength;
    }

    private static void ProcessFileConflict(
      string currentFilePath,
      string baseFilePath,
      string relativePath,
      JsonData existingConflicts,
      JsonData newConflicts,
      List<string> conflictingFiles)
    {
      string currentMd5 = UnityUtil.GetMd5Str(File.ReadAllBytes(currentFilePath));
      string baseMd5 = UnityUtil.GetMd5Str(File.ReadAllBytes(baseFilePath));
      if (IsConflicting(existingConflicts, relativePath, currentMd5, baseMd5))
      {
        conflictingFiles.Add(currentFilePath);
      }
      UpdateConflictEntry(newConflicts, relativePath, currentMd5, baseMd5);
    }

    private static bool IsConflicting(
      JsonData existingConflicts, 
      string relativePath, 
      string currentMd5, 
      string baseMd5)
    {
      return existingConflicts.ContainsKey(relativePath) 
        && (string)existingConflicts[relativePath]["tmp"] == currentMd5 
        && (string)existingConflicts[relativePath]["base"] != baseMd5;
    }

    private static void UpdateConflictEntry(
      JsonData conflicts, 
      string relativePath, 
      string currentMd5, 
      string baseMd5)
    {
      JsonData entry = new JsonData();
      entry.SetJsonType(JsonType.Object);
      entry["tmp"] = currentMd5;
      entry["base"] = baseMd5;
      conflicts[relativePath] = entry;
    }

    private static void UpdateConflictFile(
      string conflictFilePath, 
      JsonData newConflicts, 
      List<string> conflictingFiles)
    {
      if (conflictingFiles.Count == 0)
      {
        if (File.Exists(conflictFilePath))
          File.Delete(conflictFilePath);
        using (FileStream fileStream = new FileStream(conflictFilePath, FileMode.Create, FileAccess.Write))
        using (StreamWriter streamWriter = new StreamWriter(fileStream))
        {
          streamWriter.Write(newConflicts.ToJson());
        }
      }
    }

    public BuildTemplate(string baseTemplateDir, string customTemplateDir, string outputDir)
    {
      this.baseTemplateDirectory = baseTemplateDir;
      this.customTemplateDirectory = customTemplateDir;
      this.outputDirectory = outputDir;
    }

    public void start()
    {
      excludedFilePatterns.Clear();
      string[] strArray = new string[2]
      {
        @".*[\\/]\.DS_Store$",
        @"\.meta$"
      };
      foreach (string str in strArray)
        excludedFilePatterns.Add(str);
      foreach (string path3 in configurationFiles)
      {
        string path = Path.Combine(customTemplateDirectory, "minigame", path3);
        if (File.Exists(path))
          File.Delete(path);
      }
      CopyDefaultTemplate();
      if (HasMinigameDirectory(customTemplateDirectory))
        CopyCustomTemplate();
    }

    private void CopyDefaultTemplate()
    {
      TriggerLifecycleEvent(LifeCycle.beforeCopyDefault);
      if (!Directory.Exists(outputDirectory))
        Directory.CreateDirectory(outputDirectory);
      CopyDirectoryRecursively(baseTemplateDirectory, outputDirectory, excludedFilePatterns.ToArray());
      TriggerLifecycleEvent(LifeCycle.afterCopyDefault);
    }

    private static bool HasMinigameDirectory(string templatePath)
    {
      return Directory.Exists(Path.Combine(templatePath, "minigame"));
    }

    private void CopyCustomTemplate()
    {
      TriggerLifecycleEvent(LifeCycle.beforeCoverTemplate);
      CopyDirectoryRecursively(Path.Combine(customTemplateDirectory, "minigame"), outputDirectory, excludedFilePatterns.ToArray());
      TriggerLifecycleEvent(LifeCycle.afterCoverTemplate);
    }

    public static void MergeConfigurationFiles(string templateRoot, string outputDirectory)
    {
      string[] strArray = new string[2]
      {
        "game.json",
        "project.config.json"
      };
      foreach (string path2 in strArray)
      {
        string path1 = Path.Combine(templateRoot, path2);
        string path3 = Path.Combine(outputDirectory, path2);
        if (File.Exists(path1) && File.Exists(path3))
        {
          try
          {
            string json1 = string.Empty;
            using (FileStream fileStream = new FileStream(path1, FileMode.Open, FileAccess.Read))
            {
              using (StreamReader streamReader = new StreamReader((Stream) fileStream))
                json1 = streamReader.ReadToEnd();
            }
            string json2 = string.Empty;
            using (FileStream fileStream = new FileStream(path3, FileMode.Open, FileAccess.Read))
            {
              using (StreamReader streamReader = new StreamReader((Stream) fileStream))
                json2 = streamReader.ReadToEnd();
            }
            string json3 = MergeJsonObjects(JsonMapper.ToObject(json1), JsonMapper.ToObject(json2)).ToJson();
            string path4 = Path.Combine(outputDirectory, path2);
            if (File.Exists(path4))
              File.Delete(path4);
            using (FileStream fileStream = new FileStream(path4, FileMode.Create, FileAccess.Write))
            {
              using (StreamWriter streamWriter = new StreamWriter((Stream) fileStream))
                streamWriter.Write(json3);
            }
          }
          catch (Exception)
          {
            throw new Exception("构建模板合并 [" + path1 + "] 失败，请检查其 JSON 格式的正确性。");
          }
        }
      }
    }

    private static JsonData MergeJsonObjects(JsonData sourceObject, JsonData targetObject)
    {
      foreach (string key in (IEnumerable<string>) sourceObject.Keys)
      {
        if (sourceObject[key].IsArray)
          targetObject[key] = sourceObject[key];
        else if (sourceObject[key].IsObject)
        {
          if (!targetObject.Keys.Contains(key))
            targetObject[key] = new JsonData();
          MergeJsonObjects(sourceObject[key], targetObject[key]);
        }
        else
          targetObject[key] = sourceObject[key];
      }
      return targetObject;
    }

    private void TriggerLifecycleEvent(LifeCycle eventType) => LifeCycleEvent.Emit(eventType);

    private static bool MatchesPattern(string filePath, string[] patterns)
    {
      foreach (string pattern in patterns)
      {
        if (Regex.IsMatch(filePath, pattern))
          return true;
      }
      return false;
    }

    private static void CopyDirectoryRecursively(string sourceDir, string destinationDir, string[] ignorePatterns, bool cleanupDestination = false)
    {
      if (!Directory.Exists(sourceDir))
        throw new Exception("sourceDir: [" + sourceDir + "] is not exists.");
      if (!Directory.Exists(destinationDir))
        Directory.CreateDirectory(destinationDir);
      string[] files = Directory.GetFiles(sourceDir);
      string[] directories = Directory.GetDirectories(sourceDir);
      foreach (string str1 in files)
      {
        string fileName = Path.GetFileName(str1);
        if (!MatchesPattern(str1, ignorePatterns))
        {
          string str2 = Path.Combine(destinationDir, fileName);
          if (File.Exists(str2))
          {
            if (!AreBytesEqual(File.ReadAllBytes(str1), File.ReadAllBytes(str2)))
              File.Delete(str2);
            else
              continue;
          }
          File.Copy(str1, str2);
        }
      }
      if (cleanupDestination)
      {
        foreach (string file in Directory.GetFiles(destinationDir))
        {
          string fileName = Path.GetFileName(file);
          if (!File.Exists(Path.Combine(sourceDir, fileName)))
            File.Delete(file);
        }
      }
      foreach (string path in directories)
      {
        string str = Path.Combine(destinationDir, Path.GetFileName(path));
        CopyDirectoryRecursively(path, str, ignorePatterns, cleanupDestination);
      }
    }

    private static bool AreBytesEqual(byte[] source, byte[] target)
    {
      if (source.Length != target.Length)
        return false;
      for (int index = 0; index < source.Length; ++index)
      {
        if (source[index] != target[index])
          return false;
      }
      return true;
    }
  }
}
