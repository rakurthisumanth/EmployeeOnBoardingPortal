import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BsPlus } from "react-icons/bs";
import { GrFormEdit } from "react-icons/bs";




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#D7D2B8",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein,logo) {
  return { name, calories, fat, carbs, protein ,logo};
}

//  const logo1=<GrFormEdit/>
const rows = [
  createData('EMPLOYEE1', "HR MANAGEMENT", "Dearsafe Dating Sereno", "22/10/2022", "notassign",<BsPlus/> ),
  createData('EMPLOYEE1', "HR MANAGEMENT", "Dearsafe Dating Sereno", "22/10/2022", "notassigin",<BsPlus/>),
  createData('EMPLOYEE1', "HR MANAGEMENT", "Dearsafe Dating Sereno", "22/10/2022", "notassigin",<BsPlus/>),
  createData('EMPLOYEE1', "HR MANAGEMENT", "Dearsafe Dating Sereno", "22/10/2022", "notassigin",<BsPlus/>),
  createData('EMPLOYEE1', "HR MANAGEMENT", "Dearsafe Dating Sereno", "22/10/2022", "notassigin",<BsPlus/>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 70,
  },
});

export default function Presenetation() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">DEPARTMENT</StyledTableCell>
            <StyledTableCell align="right">ASSIGNED TO</StyledTableCell>
            <StyledTableCell align="right">JOINING DATE</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{<BsPlus/>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}