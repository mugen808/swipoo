import { useState } from "react"

const useInput = (initalValue: any) => {
  const [value, setValue] = useState(initalValue)

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return { value, handleChange }
}

export { useInput }