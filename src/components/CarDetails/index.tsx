import BookedCarEntry from "../BookedCarEntry"

const CarDetails: React.FC = () => {
  const bookedCarsEntries = JSON.parse(localStorage.getItem('users') || '[]')
  return (
    <div>
      {
        bookedCarsEntries.map((car: any, index: number) => {
          return (
            <>
              <BookedCarEntry index={index} key={index} car={car} />
            </>
          )
        })
      }

    </div>
  )
}

export default CarDetails;