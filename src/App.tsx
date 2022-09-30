import Form from './components/Form'
import BookedCarsList from './components/BookedCarsList'
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
          <BookedCarsList />
        </CarDetailsContextProvider>
      </QueryClientProvider>
    </Container>
  )
}

export default App
