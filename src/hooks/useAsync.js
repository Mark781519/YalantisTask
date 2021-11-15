import {useReducer, useCallback, useRef} from "react"
import useMounted from "./useMounted"

const defaultState = {status: "idle", data: null, error: null}

function useSafedDispatch(dispatch) {
  const mounted = useMounted()

  return useCallback(
    (...args) => {
      if (mounted.current) {
        dispatch(...args)
      }
    },
    [dispatch, mounted],
  )
}

function useAsync(initialState = {}) {
  const initialStateRef = useRef({
    ...defaultState,
    ...initialState,
  })

  const [{data, status, error}, unsafeDispatch] = useReducer(
    (a, b) => ({...a, ...b}),
    initialStateRef.current,
  )

  const dispatch = useSafedDispatch(unsafeDispatch)

  const setData = useCallback(
    data => dispatch({data, status: "resolved"}),
    [dispatch],
  )

  const setError = useCallback(
    error => dispatch({error, status: "rejected"}),
    [dispatch],
  )

  const reset = useCallback(
    () => dispatch(initialStateRef.current),
    [dispatch, initialStateRef],
  )

  const run = useCallback(
    promise => {
      if (!promise) {
        return
      }

      dispatch({status: "pending"})

      promise.then(
        data => {
          setData(data)
          return data
        },
        error => {
          setError(error)
          return Promise.reject(error)
        },
      )
    },
    [dispatch, setData, setError],
  )

  return {
    data,
    error,
    run,
    status,
    setData,
    setError,
    reset,
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
    isIdle: status === "idle",
  }
}

export default useAsync;
