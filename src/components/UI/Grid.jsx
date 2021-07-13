import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//Icons
import FeelsLikeIcon from "@material-ui/icons/WhatshotOutlined";
import WaveIcon from "@material-ui/icons/WavesOutlined";
import VisibilityIcon from "@material-ui/icons/RemoveRedEyeOutlined";
import HumidityIcon from "@material-ui/icons/InvertColors";
import PressureIcon from "@material-ui/icons/SpeedOutlined";

const useStyles = makeStyles((theme) => ({
  gridMainContainer: {
    flexGrow: 1,
    margin: "45px auto"
  },
  paper: {
    height: 140,
    width: 120,
    "&:hover": {
      backgroundColor: "#1ca9c9",
      transition: "0.2s",
      color: "white"
    }
  },
  icons: {
    height: "25px",
    "&:hover": {
      backgroundColor: "#1ca9c9",
      transition: "0.3s",
      color: "gold"
    }
  },
  textTitle: {
    fontSize: 20
  },
  textStats: {
    position: "relative",
    transform: "translate(0%,50%)",
    fontSize: 14,
    "&:hover": {
      backgroundColor: "#1ca9c9",
      transition: "0.3s",
      fontSize: 16,
      color: "gold",
      fontWeight: "bold"
    }
  }
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridMainContainer} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <FeelsLikeIcon className={classes.icons} color="primary" />
              <Typography
                className={classes.textTitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Feels Like:
              </Typography>
              <Typography
                className={classes.textStats}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.dataFeelsLike}
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <WaveIcon className={classes.icons} color="primary" />
              <Typography
                className={classes.textTitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Wind:
              </Typography>
              <Typography
                className={classes.textStats}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.dataWind}
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <VisibilityIcon className={classes.icons} color="primary" />
              <Typography
                className={classes.textTitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Visibility:
              </Typography>
              <Typography
                className={classes.textStats}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.dataVisibility}
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <HumidityIcon className={classes.icons} color="primary" />
              <Typography
                className={classes.textTitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Humidity:
              </Typography>
              <Typography
                className={classes.textStats}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.dataHumidity}
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <PressureIcon className={classes.icons} color="primary" />
              <Typography
                className={classes.textTitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Pressure:
              </Typography>
              <Typography
                className={classes.textStats}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.dataPressure}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
