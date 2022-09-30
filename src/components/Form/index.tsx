import { useCarDetailsContext } from '../../hooks/userCarDetailsContext';
import FormDropdowns from '../FormDropdowns'
import DateInput from '../DateInput'
import CarModelsList from "../CarModelsList";
import TextField from '@mui/material/TextField';
import { FormGroup } from "@mui/material";
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { addUserToLocalStorage } from '../../helpers'
import './styles.css'

const Form: React.FC = () => {
  const {
    carBrand, fuelType, enrollmentDate,
    setCarBrand, setFuelType, setEnrollmentDate,
    selectedModel, setSelectedModel, userName, setUserName
  } = useCarDetailsContext()

  const disabled = (carBrand && fuelType && enrollmentDate && userName && selectedModel) ? false : true

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addUserToLocalStorage({ carBrand, enrollmentDate, fuelType, selectedModel, userName })
    clearInputs()
  }
  const clearInputs = () => {
    setCarBrand('')
    setFuelType('')
    setEnrollmentDate('')
    setSelectedModel('')
    setUserName('')
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <FormGroup>
        <InputLabel>Nombre</InputLabel>
        <TextField id="outlined-basic" variant="outlined" required={true} value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <FormDropdowns />
        <DateInput />
        <CarModelsList />
        <Button sx={{ marginTop: "2vh" }} variant="contained" size="large" fullWidth={false} type="submit" disabled={disabled}>Añadir coche</Button>
      </FormGroup>
    </form>
  )
}

export default Form