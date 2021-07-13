import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Bad",
  1: "Bad+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "So so...",
  3: "Okay",
  3.5: "Good",
  4: "Great",
  4.5: "Excellent",
  5: "Perfect :-)"
};

const useStyles = makeStyles({
  rating: {
    width: 215,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    margin: "20px auto",
    backgroundColor: "darkblue",
    borderRadius: "5px",
    padding: "5px",
    color: "whitesmoke",
    "&:hover": {
      color: "cyan",
      transition: "0.3s"
    }
  }
});

export default function HoverRating() {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.rating}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={3}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
