import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableForDetails from "./TableForDetails";

const BookedCarEntry: React.FC<any> = ({ index, car }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ justifyContent: "flex-end", padding: "3vh" }}
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
            {car.userName}
          </Typography>
          <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>{car.selectedModel.brand}</Typography>
          <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>{car.selectedModel.model}</Typography>
          <Typography sx={{ color: 'text.secondary', flexGrow: 1, textAlign: "right" }}>{car.enrollmentDate}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TableForDetails car={car} />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default BookedCarEntry