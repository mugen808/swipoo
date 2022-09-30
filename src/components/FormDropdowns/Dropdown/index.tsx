import { InputLabel, Select, MenuItem } from '@mui/material'

interface Props {
  optionsArray: Array<string>,
  onChange: (event: any) => void,
  label: string,
  value: string
}

const Dropdown: React.FC<Props> = ({ optionsArray, onChange, value, label }) => {
  return (
    <>
      <InputLabel sx={{ marginTop: "2vh" }}>{label}</InputLabel>
      <Select value={value} onChange={onChange} required={true}>
      {
        optionsArray?.map((brand: string, index: number) => (
          <MenuItem key={index} value={brand}>{brand}</MenuItem>
        ))
      }
    </Select>
  </>
  )
}

export default Dropdown;