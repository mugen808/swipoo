import { useCarDetailsContext } from '../../hooks/userCarDetailsContext';
import CarBrandInput from '../CarBrandInput'
import DateInput from '../DateInput'
import CarModelInput from "../CarModelInput";
import TextField from '@mui/material/TextField';
import { FormGroup } from "@mui/material";
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { addUserToLocalStorage } from '../../helpers'
import './styles.css'


const Form: React.FC = () => {
  const { carBrand, fuelType, enrollmentDate, setCarBrand, setFuelType, setEnrollmentDate, selectedModel, setSelectedModel, userName, setUserName } = useCarDetailsContext()
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
  if (Object.keys(selectedModel).length) console.log('slct mdl', selectedModel)
  return (
    <form className='container' onSubmit={handleSubmit}>
      <FormGroup>
        <InputLabel>Nombre</InputLabel>
        <TextField id="outlined-basic" variant="outlined" required={true} value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <CarBrandInput />
        <DateInput />
        <CarModelInput />
        <Button variant="contained" size="large" fullWidth={false} type="submit">Crear usuario</Button>
      </FormGroup>
    </form>
  )
}

export default Form