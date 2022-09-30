import { useContext } from "react"
import { CarDetailsContext } from "../context/CarDetailsContext"

export const useCarDetailsContext = () => {
  const context = useContext(CarDetailsContext)
  return context
}