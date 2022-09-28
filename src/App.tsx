import Form from './components/Form'
import { QueryClientProvider } from 'react-query'
import client from './queryClient'
import './App.css'

function App() {

  return (
    <QueryClientProvider client={client}>
      <Form />
    </QueryClientProvider>
  )
}

export default App
