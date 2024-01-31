import { Button } from './components/Button'
import { useGetRouterState } from './hooks/useGetRouterState'
import { useUpdateRouterState } from './hooks/useUpdateRouterState'

export const About = () => {
  const { updateRouterState } = useUpdateRouterState()
  const { state } = useGetRouterState()

  const booleanValue = !state?.usefulBooleanValue ?? false

  return (
    <div className="flex-col">
      <h1 className="text-2xl">About Page</h1>
      <div className="my-8">
        <Button
          text="Update Router State"
          variant="primary"
          onClick={() =>
            updateRouterState({
              testState: 'state 2',
              usefulBooleanValue: booleanValue,
            })
          }
        />
      </div>
      <div className="my-8">
        <p>Router State: {JSON.stringify(state)}</p>
      </div>
    </div>
  )
}
