import { useCallback } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'

import { CustomerInfoFormValues } from './CustomerInfoForm.types'
import { TextInputFormik } from './TextInputFormik/TextInputFormik'

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
          <TextInputFormik name="lastName" label="Last Name" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
