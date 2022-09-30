import { createContext, useState, PropsWithChildren } from "react";

export const CarDetailsContext = createContext<any>({})


export const CarDetailsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [carBrand, setCarBrand] = useState<string>('')
  const [fuelType, setFuelType] = useState<string>('')
  const [enrollmentDate, setEnrollmentDate] = useState<string>('')
  const [selectedModel, setSelectedModel] = useState<Object>({})
  const [userName, setUserName] = useState<string>('')

  return (
    <CarDetailsContext.Provider value={{ carBrand, fuelType, enrollmentDate, setCarBrand, setFuelType, setEnrollmentDate, selectedModel, setSelectedModel, userName, setUserName }}>
      {children}
    </CarDetailsContext.Provider>
  )
}