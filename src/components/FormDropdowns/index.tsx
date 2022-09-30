import { useQuery } from 'react-query'
import { useCarDetailsContext } from '../../hooks/userCarDetailsContext';
import { fetchBrands, fetchFuelTypes } from '../../services';
import Dropdown from './Dropdown';

const FormDropdowns: React.FC = () => {
  const { data: brandList, isSuccess: brandListFetched } = useQuery('brands', fetchBrands, {
    staleTime: Infinity
  })
  const { data: fuelTypes, isSuccess: fuelTypesFetched } = useQuery('fuelTypes', fetchFuelTypes, {
    staleTime: Infinity
  })

  const { carBrand, setCarBrand, fuelType, setFuelType } = useCarDetailsContext()
  if (!fuelTypesFetched || !brandListFetched) return <div>Waiting</div>


  return (
    <>
      {
        brandListFetched
          ? <Dropdown optionsArray={brandList} value={carBrand} onChange={(e) => setCarBrand(e.target.value)} label="Marca:" />
          : null
      }      
      {
        fuelTypesFetched
          ? <Dropdown optionsArray={fuelTypes} value={fuelType} onChange={(e) => setFuelType(e.target.value)} label="Combustible:"  />
          : null
      }      
    </>
  )
}

export default FormDropdowns;