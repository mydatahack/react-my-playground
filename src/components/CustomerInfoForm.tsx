import { Field, Form, Formik, FormikProps } from 'formik'
import { useCallback } from 'react'
import { CustomerInfoFormValues } from './CustomerInfoForm.types'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressStreet: '',
  addressState: '',
  addressCountry: '',
}

export const CustomerInfoForm = () => {
  const onSubmit = useCallback((values: CustomerInfoFormValues) => {
    alert(`Submitted form with: ${JSON.stringify(values)}`)
  }, [])

  return (
    <Formik<CustomerInfoFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<CustomerInfoFormValues>) => (
        <Form>
          <Field type="text" name="firstName" id="firstName" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
