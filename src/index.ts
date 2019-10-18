// refs: https://github.com/facebook/react/issues/10231
import { useEffect, useState } from 'react'

const store: { [key: string]: unknown } = {}
const queue: { [key: string]: ((value?: unknown) => void)[] } = {}
const running: { [key: string]: boolean } = {}

const fetch = async <T>(api: () => Promise<T>, id: string) => {
  try {
    const callbacks = queue[id]
    queue[id] = []
    running[id] = false
    const res = store[id] ? store[id] : await api()
    store[id] = res
    callbacks.forEach(callback => {
      callback(res)
    })
  } catch (e) {
    console.error(e)
    running[id] = false
  } finally {
    running[id] = false
  }
}

export type UseAsyncCahceProps<T> = {
  id: string
  api(): Promise<T>
}

export const useAsyncCache = <T>(props: UseAsyncCahceProps<T>) => {
  const [cached, setCached] = useState<T>()
  useEffect(() => {
    if (!props.id) {
      return
    }
    new Promise<any>(resolve => {
      if (!queue[props.id]) {
        queue[props.id] = []
      }
      queue[props.id].push(resolve)
      if (!running[props.id]) {
        running[props.id] = true
        setTimeout(() => fetch(props.api, props.id), 60)
      }
    }).then(setCached)
  }, [props.id])
  return {
    cached,
  }
}
