const oneDigitPad = (value: number) => {
  if (String(value).length > 1) return String(value)
  return `0${String(value)}`
}

const formatDate = (dateObject: Date) => {
  const year = oneDigitPad(dateObject.getFullYear())
  const month = oneDigitPad(dateObject.getMonth() + 1)
  const day = oneDigitPad(dateObject.getDate())

  return `${year}-${month}-${day}`
}

const setLimitDate = () => {
  const dateObject = new Date()
  return formatDate(dateObject) 
}

const addUserToLocalStorage = (user: any) => {
  const users = localStorage.getItem('users')
  if (!users) {
    localStorage.setItem('users', JSON.stringify([user]))
    return;
  }
  const usersArray = JSON.parse(users)
  usersArray.push(user)
  localStorage.setItem('users', JSON.stringify(usersArray))
}

export { setLimitDate, oneDigitPad, formatDate, addUserToLocalStorage }