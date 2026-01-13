import { useState, useCallback } from 'react'
import { apiService } from '../services/api'

export const useApi = (endpoint, initialData = null) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await apiService.request(endpoint)
      setData(result)
      return result
    } catch (err) {
      setError(err.message)
      console.error(`Error fetching ${endpoint}:`, err)
    } finally {
      setLoading(false)
    }
  }, [endpoint])

  return { data, loading, error, fetchData, setData }
}

export const useApiMutation = (mutationFn) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(
    async (...args) => {
      setLoading(true)
      setError(null)
      try {
        const result = await mutationFn(...args)
        return result
      } catch (err) {
        setError(err.message)
        console.error('Error in mutation:', err)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [mutationFn]
  )

  return { execute, loading, error }
}
