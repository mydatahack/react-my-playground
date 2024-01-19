import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RouterTestStateSchemaType } from './useGetRouterState'

export const useUpdateRouterState = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // use it like this goBlockedAction({ testState: 'state 1'})
  const updateRouterState = useCallback(
    (state: RouterTestStateSchemaType['myState'] | null, path?: string) => {
      console.log(state, path)
      navigate(path ?? location.pathname, {
        state: { myState: state },
      })
    },
    [navigate, location]
  )

  return { updateRouterState }
}
