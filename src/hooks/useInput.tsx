import { useState } from "react"

const useInput = (initalValue: any) => {
  const [value, setValue] = useState(initalValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event val', event.target.value)
    // setValue(event.target.value)
  }

  return { value, handleChange }
}

export { useInput }