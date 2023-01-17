import './App.css'

import { Container } from '@mui/material'

import { CustomerInfoForm } from './components/CustomerInfoForm'

export const App = () => (
  <Container>
    <h1>Customer Form</h1>
    <CustomerInfoForm />
  </Container>
)
