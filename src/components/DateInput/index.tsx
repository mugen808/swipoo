import { InputLabel, TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useCarDetailsContext } from "../../hooks/userCarDetailsContext";
import { formatDate } from '../../helpers'
import { setLimitDate } from '../../helpers';

const DateInput: React.FC = () => {
  const { enrollmentDate, setEnrollmentDate } = useCarDetailsContext()

  const handleDateChange = (e: any) => {
    const dateObject = new Date(e.$d)
    const formattedDate = formatDate(dateObject)
    setEnrollmentDate(formattedDate)
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel id="date-picker">Fecha de matriculación</InputLabel>
        <DesktopDatePicker
          inputFormat="DD/MM/YYYY"
          onChange={handleDateChange}
          value={enrollmentDate || setLimitDate()}
          renderInput={(params) => <TextField {...params} />}
          disableFuture={true}
        />
      </LocalizationProvider>
    </>
  )
}

export default DateInput;