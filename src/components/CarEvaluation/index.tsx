import { useQuery } from "react-query"
import { fetchCarITP } from "../../services";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import './styles.css'

interface Props {
  car: any
}
const CarEvaluation: React.FC<Props> = ({ car }) => {
  const queryDetails = `model=${car.selectedModel.model}&ccaa=MD&enrollmentDate=${car.enrollmentDate}`
  const { data: carITP, error } = useQuery(car.selectedModel.model, () => fetchCarITP(queryDetails), {
    retry: 0,
    staleTime: Infinity
  })

  if (error) return <div>Error!</div>
  const deprecatedValue = carITP?.deprecated_value
  
  return (
    <div className="car-details-container">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ display: "table-header-group", backgroundColor: 'blue', color: 'primary.light' }}>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <Typography variant="h5" color="common.white">Valoración venal</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow >
                <TableCell component="th" scope="row">
                  Valoración según Hacienda (BOE-A-2017-15284)
                </TableCell>
                <TableCell align="right">€{deprecatedValue?.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>90% del valor venal</TableCell>
                <TableCell align="right">€{(deprecatedValue - (deprecatedValue * .10))?.toFixed(2)}</TableCell>
              </TableRow>            
              <TableRow>
                <TableCell>80% del valor venal</TableCell>
                <TableCell align="right">€{(deprecatedValue - (deprecatedValue * .20))?.toFixed(2)}</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell>70% del valor venal</TableCell>
                <TableCell align="right">€{(deprecatedValue - (deprecatedValue * .30))?.toFixed(2)}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CarEvaluation