using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;

namespace KSWASM.editor
{
    public class CoroutineRunner
    {
        public class DelayForSeconds
        {
            public float Time { get; }
            public DelayForSeconds(float time) => Time = time;
        }

        private class CoroutineHandle
        {
            private Stack<IEnumerator> m_Coroutines;
            private float m_WaitTime = 0;
            public CoroutineHandle(IEnumerator coroutine)
            {
                m_Coroutines = new Stack<IEnumerator>();
                m_Coroutines.Push(coroutine);
            }
            public bool MoveNext(float deltaTime)
            {
                if (m_WaitTime > 0)
                {
                    m_WaitTime -= deltaTime;
                }

                if (m_WaitTime > 0)
                {
                    return true;
                }
                IEnumerator current = m_Coroutines.Peek();
                if (!current.MoveNext())
                {
                    m_Coroutines.Pop();
                }
                else
                {
                    if (current.Current is IEnumerator nested)
                    {
                        m_Coroutines.Push(nested);
                    }
                    else if (current.Current is DelayForSeconds delayForSeconds)
                    {
                        m_WaitTime = delayForSeconds.Time;
                    }
                }
                
                return m_Coroutines.Count > 0;
            }
        }
        private List<CoroutineHandle> m_CoroutineHandles = new List<CoroutineHandle>();
        private double m_LastUpdateTime = 0; 
        public Action m_OnAllCoroutineCompleted;

        public CoroutineRunner(Action onAllCoroutineCompleted)
        {
            m_OnAllCoroutineCompleted = onAllCoroutineCompleted;
        }
        public void StartCoroutine(IEnumerator coroutine)
        {
            m_CoroutineHandles.Add(new CoroutineHandle(coroutine));
            if (m_CoroutineHandles.Count == 1)
            {
                EditorApplication.update += UpdateCoroutine;
            }
        }
        private void UpdateCoroutine()
        {
            var deltaTime = EditorApplication.timeSinceStartup - m_LastUpdateTime;
            m_LastUpdateTime = EditorApplication.timeSinceStartup;
            foreach (var coroutineHandle in m_CoroutineHandles.ToArray())
            {
                if (!coroutineHandle.MoveNext((float)deltaTime))
                {
                    m_CoroutineHandles.Remove(coroutineHandle);
                }
            }

            if (m_CoroutineHandles.Count == 0)
            {
                EditorApplication.update -= UpdateCoroutine;
                m_OnAllCoroutineCompleted?.Invoke();
            }
        }
    }
}