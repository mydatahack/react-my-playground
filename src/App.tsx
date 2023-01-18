import './App.css'

import { CustomerInfoForm } from './components/CustomerInfoForm/CustomerInfoForm'
import { PageLayout } from './components/PageLayout/PageLayout'

export const App = () => (
  <PageLayout>
    <h1>Customer Form</h1>
    <CustomerInfoForm />
  </PageLayout>
)
