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

export { fetchBrands, fetchFuelTypes }