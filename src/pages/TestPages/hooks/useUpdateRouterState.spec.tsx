import { useEffect } from 'react'
import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { render, waitFor } from '@testing-library/react'

import { RouterTestStateSchemaType } from './useGetRouterState'
import { useUpdateRouterState } from './useUpdateRouterState'

const Component = ({
  state,
  path,
}: {
  state: RouterTestStateSchemaType['myState']
  path?: string
}) => {
  const { updateRouterState } = useUpdateRouterState()

  useEffect(() => {
    console.log(state, path)
    updateRouterState(state, path)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div />
}

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Component state={{ testState: 'state 1' }} path="/test" />,
  },
  { path: '/test', element: <div>test</div> },
]
const router = createMemoryRouter(routeConfig, { initialEntries: ['/'] })

const TestComponentWithRouter = () => {
  return <RouterProvider router={router} />
}

describe('useUpdateRouterState', () => {
  it('should correctly update history state', async () => {
    render(<TestComponentWithRouter />)

    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/test')
    })
  })
})
