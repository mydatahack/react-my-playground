import { ReactNode } from 'react'
import { Container } from '@mui/material'

import { FormStepper } from '../FormStepper/FormStepper'

interface PageLayoutProps {
  children: ReactNode
}
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container>
      {children}
      <FormStepper />
    </Container>
  )
}
