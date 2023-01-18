import { useCallback } from 'react'
import { Button, Grid } from '@mui/material'
import { Form, Formik } from 'formik'

import { TextInputFormik } from '../TextInputFormik/TextInputFormik'
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
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  )
}
