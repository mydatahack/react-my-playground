import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CustomerInfoForm } from './CustomerInfoForm'

describe('<CustomerInfoForm />', () => {
  beforeEach(() => {
    window.alert = jest.fn()
  })
  afterEach(() => {
    ;(window.alert as jest.Mock<any, any>).mockClear()
  })
  it('should render the form and submit', async () => {
    render(<CustomerInfoForm />)
    expect(screen.getByTestId('customer-info-form')).toBeVisible()
    await act(async () => {
      await userEvent.type(screen.getByLabelText('First Name'), 'FirstName')
    })

    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
    })
  })
})
