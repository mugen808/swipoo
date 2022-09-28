import { useQuery } from 'react-query'
import { fetchBrands } from '../../services/fetchBrands';
import Dropdown from '../Dropdown';
const CarBrandInput = () => {
  const { data: brandList, isSuccess } = useQuery('brands', fetchBrands, {
    staleTime: Infinity
  })
  
  return (
    <>
      <label>Choose a brand:
        {
          isSuccess
            ? <Dropdown optionsArray={brandList} />
            : null
        }      
      </label>
    </>
  )
}

export default CarBrandInput;