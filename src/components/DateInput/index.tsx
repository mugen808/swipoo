import { setLimitDate } from "../../helpers/setLimitDate";
import { useInput } from "../../hooks/useInput";

const DateInput: React.FC = () => {
  const datePicker = useInput(setLimitDate())
  return (
    <>
      <label>
        Primera matriculación:
        <input type="date" name="enrollment-date" value={datePicker.value} onChange={datePicker.handleChange} max={setLimitDate()} />
      </label>
    </>
  )
}

export default DateInput;