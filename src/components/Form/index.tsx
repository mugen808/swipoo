import { useInput } from "../../hooks/useInput";
import CarBrandInput from '../CarBrandInput.tsx'
import DateInput from '../DateInput'
import './styles.css'

const Form: React.FC = () => {
  return (
    <section className='form-container'>
      <CarBrandInput />
      <DateInput />
    </section>
  )
}

export default Form