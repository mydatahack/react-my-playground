import './App.css'

import { CustomerInfoForm } from './components/CustomerInfoForm/CustomerInfoForm'
import { PageLayout } from './components/PageLayout/PageLayout'

export const App = () => (
  <PageLayout title="Customer Form">
    <CustomerInfoForm />
  </PageLayout>
)
