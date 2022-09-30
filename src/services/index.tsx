const fetchBrands = async () => {
  const response = await fetch('./ListOfBrands.json')
  const data = await response.json()
  return data
}

const fetchFuelTypes = async () => {
  const response = await fetch('./fuelTypes.json')
  const data = await response.json()
  return data
}

const fetchCarModels = async (queryDetails: string) => {
  const queryUrl = encodeURI(`${import.meta.env.VITE_CHECK_MODEL_URL}?${queryDetails}`)
  const response = await fetch(queryUrl)
  const data = await response.json()
  return data
}

const fetchCarITP = async (queryDetails: string) => {
  const queryUrl = encodeURI(`${import.meta.env.VITE_CHECK_ITP_URL}?${queryDetails}`)
  const response = await fetch(queryUrl)
  const data = await response.json()
  return data
}

export { fetchBrands, fetchFuelTypes, fetchCarModels, fetchCarITP }

