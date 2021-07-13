import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridStats from "./Grid";

const useStyles = makeStyles({
  //Forecast Card
  cardContainer: {
    margin: "30px auto 50px auto",
    maxWidth: 850,
    width: "100%",
    minHeight: "30rem",
    backgroundColor: "#1D428A",
    color: "#ffd54f",
    border: "2px #3E8EDE solid"
  },
  weatherContent: {
    float: "left"
  },
  textDescription: {
    color: "white",
    whiteSpace: "pre-line"
  },
  button: {
    margin: "0 auto",
    minWidth: "20%",
    "&:hover": {
      backgroundColor: "#318CE7",
      transition: "0.3s"
    }
  },
  link: {
    color: "#007FFF",
    fontWeight: "bold",
    backgroundColor: "#002244",
    borderRadius: "5px",
    padding: "5px",
    "&:hover": {
      backgroundColor: "#132257",
      color: "#00BFFF",
      transition: "0.3s"
    }
  }
});

//Used [props] to reuse texts efficiently with Main.js
export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardContainer}>
        <CardContent>
          <div className={classes.weatherContent}>{props.IconStats}</div>
          {/* Title Location */}
          <Typography gutterBottom variant="h5" component="h2">
            {props.WeatherLocation}
          </Typography>

          {/* Temp & Date Status */}
          <Typography
            className={classes.textDescription}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.TempStatus}
            {"\n"}
            {props.updated}
            {props.updatedIcon}
          </Typography>

          {/* Grid Forecasts, using 1st props from Grid.jsx to pass 2nd
          props here, then pass to Main.jsx to initialize api data */}
          <GridStats
            dataFeelsLike={props.feelsLike}
            dataWind={props.wind}
            dataVisibility={props.visibility}
            dataHumidity={props.humidity}
            dataPressure={props.pressure}
          />
        </CardContent>
        <CardActions>
          <Button className={classes.button} size="small" color="primary">
            <a
              className={classes.link}
              href={props.referLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              See source Forecast
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
