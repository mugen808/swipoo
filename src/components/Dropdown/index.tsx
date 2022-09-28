interface Props {
  optionsArray: Array<string>
}

const Dropdown: React.FC<Props> = ({ optionsArray }) => {
  return (
    <select>
    {
      optionsArray?.map((brand: string, index: number) => (
        <option key={index} value={brand}>{brand}</option>
      ))
    }      
  </select>
  )
}

export default Dropdown;