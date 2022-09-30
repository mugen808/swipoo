import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CarEvaluation from '../CarEvaluation';

const TableForDetails: React.FC<any> = ({ car }) => {
  return (
    <TableContainer component={Paper}>
      <Table key={car.selectedModel.model} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell align="center">Modelo</TableCell>
            <TableCell align="center">Cilindrada</TableCell>
            <TableCell align="center">Cilindros</TableCell>
            <TableCell align="center">Combustible</TableCell>
            <TableCell align="center">Potencia&nbsp;(KW)</TableCell>
            <TableCell align="center">Potencia fiscal</TableCell>
            <TableCell align="center">Potencia&nbsp;CV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {car.selectedModel.brand}
              </TableCell>
              <TableCell align="center">{car.selectedModel.model}</TableCell>
              <TableCell align="center">{car.selectedModel.cc}</TableCell>
              <TableCell align="center">{car.selectedModel.cylinders}</TableCell>
              <TableCell align="center">{car.selectedModel.fuel}</TableCell>
              <TableCell align="center">{car.selectedModel.kw}</TableCell>
              <TableCell align="center">{car.selectedModel.cvf}</TableCell>
              <TableCell align="center">{car.selectedModel.cv}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <CarEvaluation car={car} />
    </TableContainer>
  );
}

export default TableForDetails