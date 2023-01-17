import { TextField } from '@mui/material'
import { useField } from 'formik'

interface TextInputFormikProps {
  name: string
  label: string
}
export const TextInputFormik = ({ name, label }: TextInputFormikProps) => {
  const [field, , helpers] = useField({ name })
  const { value, onBlur } = field
  const { setValue } = helpers

  console.log(value)

  return (
    <TextField id={name} label={label} onChange={setValue} onBlur={onBlur} />
  )
}
