import { useCallback } from 'react'
import { Grid } from '@mui/material'
import { Form, Formik } from 'formik'

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
    /* eslint-disable no-alert */
    alert(`Submitted form with: ${JSON.stringify(values)}`)
  }, [])

  return (
    <Formik<CustomerInfoFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <Grid container>
          <Grid container direction="column" md={4} sm={12} rowGap="15px">
            <TextInputFormik name="firstName" label="First Name" />
            <TextInputFormik name="lastName" label="Last Name" />
            <button type="submit">Submit</button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
