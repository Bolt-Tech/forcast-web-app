import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tbContainer: {
    margin: "0px auto",
    borderRadius: "5px"
  },
  table: {
    minWidth: 600
  },
  bgCaption: {
    backgroundColor: "#2E5090",
    "&:hover": {
      backgroundColor: "#2E2787",
      transition: "0.3s"
    }
  },
  captionFont: {
    color: "darkGrey",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  rowHeader: {
    backgroundColor: "#002147",
    border: "black solid 2px",
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "#1D428A"
    }
  },
  rowHeaderFont: {
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 17,
    border: "darkCyan solid 2px",
    "&:hover": {
      backgroundColor: "#1E2952",
      color: "#00A693",
      transition: "0.3s"
    }
  },
  rows: {
    backgroundColor: "#00416A",
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "#0070BB"
    }
  },
  rowsFont: {
    color: "whitesmoke",
    fontSize: 16,
    border: "darkCyan solid 2px",
    "&:hover": {
      backgroundColor: "#132257",
      color: "#20B2AA",
      transition: "0.3s",
      fontWeight: "bolder"
    }
  }
});

function createData(days, celsius, farenheit, humidity, condition, icon) {
  return { days, celsius, farenheit, humidity, condition, icon };
}

export default function AcccessibleTable(props) {
  const classes = useStyles();

  //Creates an initialized variables
  const rows = [
    createData(
      props.date_D1,
      props.tempC_D1,
      props.tempF_D1,
      props.humidity_D1,
      props.statsText_D1,
      props.statsIcon_D1
    ),
    createData(
      props.date_D2,
      props.tempC_D2,
      props.tempF_D2,
      props.humidity_D2,
      props.statsText_D2,
      props.statsIcon_D2
    ),
    createData(
      props.date_D3,
      props.tempC_D3,
      props.tempF_D3,
      props.humidity_D3,
      props.statsText_D3,
      props.statsIcon_D3
    )
  ];

  return (
    <TableContainer component={Paper} className={classes.tbContainer}>
      <Table className={classes.table} aria-label="caption table">
        <caption className={classes.bgCaption}>
          <p className={classes.captionFont}>
            Weather condition forcecast refreshes every day
          </p>
        </caption>
        <TableHead>
          <TableRow className={classes.rowHeader}>
            <TableCell className={classes.rowHeaderFont} align="center">
              Date Forecast
            </TableCell>
            <TableCell className={classes.rowHeaderFont} align="center">
              Celsius Average
            </TableCell>
            <TableCell className={classes.rowHeaderFont} align="center">
              Farenheit Average
            </TableCell>
            <TableCell className={classes.rowHeaderFont} align="center">
              Humidity Average
            </TableCell>
            <TableCell className={classes.rowHeaderFont} align="center">
              Condition
            </TableCell>
            <TableCell className={classes.rowHeaderFont} align="center">
              Icon Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            //Added ID next to days to make key unique
            <TableRow key={row.days.ID} className={classes.rows}>
              <TableCell
                className={classes.rowsFont}
                align="center"
                component="th"
                scope="row"
              >
                {row.days}
              </TableCell>
              <TableCell className={classes.rowsFont} align="center">
                {row.celsius}
              </TableCell>
              <TableCell className={classes.rowsFont} align="center">
                {row.farenheit}
              </TableCell>
              <TableCell className={classes.rowsFont} align="center">
                {row.humidity}
              </TableCell>
              <TableCell className={classes.rowsFont} align="center">
                {row.condition}
              </TableCell>
              <TableCell className={classes.rowsFont} align="center">
                {row.icon}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
