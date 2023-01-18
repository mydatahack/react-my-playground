import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { Button, MobileStepper, useTheme } from '@mui/material'

export const FormStepper = () => {
  const theme = useTheme()
  const handleBack = () => null
  const handleNext = () => null
  const activeStep = 1
  return (
    <MobileStepper
      variant="dots"
      steps={3}
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          // disabled={activeStep === 5}
        >
          Next
          {theme.direction === 'rtl' ? (
            // eslint-disable-next-line react/jsx-no-undef
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          // disabled={activeStep === 0}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  )
}
