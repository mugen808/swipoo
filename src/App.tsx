import Form from './components/Form'
import CarDetails from './components/CarDetails'
import { CarDetailsContextProvider } from './context/CarDetailsContext'
import { QueryClientProvider } from 'react-query'
import { Container } from '@mui/material'
import client from './queryClient'
import './App.css'

function App() {

  return (
    <Container>
      <QueryClientProvider client={client}>
        <CarDetailsContextProvider>
          <Form />
          <CarDetails />
        </CarDetailsContextProvider>
      </QueryClientProvider>
    </Container>
  )
}

export default App
