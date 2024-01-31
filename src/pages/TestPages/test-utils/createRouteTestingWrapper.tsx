import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

type CreateRouteTestingWrapperArgs = {
  initialUrl?: string
  initialState?: unknown
  children: React.ReactNode
}

export const createRouteTestingWrapper = ({
  initialUrl = '/',
  initialState,
  children,
}: CreateRouteTestingWrapperArgs) => {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path={initialUrl} element={children} />)
  )

  if (initialState) {
    router.state.location.state = initialState
  }

  // This doesn't work because RouterProvider
  // doesn't accept children 😢
  return {
    Wrapper: ({ children }: { children?: React.ReactNode }) => (
      <RouterProvider router={router} />
    ),
    getLocation: () => router.state.location,
  }
}
