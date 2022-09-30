import { fetchCarITP } from "../../services"
import { useQuery } from "react-query"
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableForDetails from "./TableForDetails";

const BookedCarEntry: React.FC<any> = ({ index, car }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {car.userName}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{car.selectedModel.carBrand}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{car.selectedModel.model}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TableForDetails />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default BookedCarEntry