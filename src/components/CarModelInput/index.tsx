import { fetchCarModels } from '../../services'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { useCarDetailsContext } from '../../hooks/userCarDetailsContext'
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


interface CarModelDetails {
  brand: string,
  cc: string,
  cv: string,
  cvf: string,
  cylinders: string,
  fuel: string,
  kw: string,
  model: string,
  period: string,
  value: string
}

const CarModelInput: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const { carBrand, enrollmentDate, fuelType, selectedModel, setSelectedModel } = useCarDetailsContext()
  console.log('selected model', selectedModel)
  const queryDetails = `brand=${carBrand}&enrollmentDate=${enrollmentDate}&fuel=${fuelType}`
  const { data: carModels, isSuccess, error } = useQuery(queryDetails, () => fetchCarModels(queryDetails), {
    retry: 1,
    staleTime: Infinity
  })
  useEffect(() => {
    setSelectedModel('')
    setSelectedIndex(-1)
  }, [carBrand, enrollmentDate, fuelType])
  
  const handleModelClick = (event: any, index: number, car: Object) => {
    setSelectedIndex(index)
    setSelectedModel(car)
  }

  if (error) return (
    <List style={{ maxHeight: '30vh', overflow: 'auto' }}>
        <ListItem>
            <ListItemText>Nothing to show yet</ListItemText>
        </ListItem>
    </List>
  )

  return(
    <List style={{ maxHeight: '30vh', overflow: 'auto' }}>
      {
        carModels?.cars.map((car: CarModelDetails, index: number) => {
          return (
            <ListItem button key={index} selected={selectedIndex === index}>
              <ListItemButton onClick={(e) => handleModelClick(e, index, car)}>
                <ListItemText>{car.model}</ListItemText>
              </ListItemButton>
            </ListItem>
          )
        })
      }
    </List>
  )
}

export default CarModelInput