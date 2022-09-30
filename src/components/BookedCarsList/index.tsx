import { useEffect } from "react"
import BookedCarEntry from "../BookedCarEntry"
import { useCarDetailsContext } from "../../hooks/userCarDetailsContext"
import { Typography } from "@mui/material"


const BookedCarsList: React.FC = () => {
  const bookedCarsEntries = JSON.parse(localStorage.getItem('users') || '[]')
  useCarDetailsContext()

  return (
    <div>
      <Typography variant="h4" sx={{ color: 'gray.500', textAlign: "center", borderBottom: 1, paddingBottom: "1vh", marginBottom: "1vh" }}>Listado de coches ({bookedCarsEntries.length})</Typography>
      {
        bookedCarsEntries.map((car: any, index: number) => {
          return (
              <BookedCarEntry index={index} key={index} car={car} />
          )
        })
      }

    </div>
  )
}

export default BookedCarsList;