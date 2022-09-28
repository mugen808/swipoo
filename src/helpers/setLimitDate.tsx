const oneDigitPad = (value: number) => {
  if (String(value).length > 1) return String(value)
  return `0${String(value)}`
}

const setLimitDate = () => {
  const dateObject = new Date()
  const year = oneDigitPad(dateObject.getFullYear())
  const month = oneDigitPad(dateObject.getMonth() + 1)
  const day = oneDigitPad(dateObject.getDate())
  
  return `${year}-${month}-${day}`
}

export { setLimitDate }