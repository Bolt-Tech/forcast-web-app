import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ForecastAPI from "./Forecast";
import Form from "./Forms/Form";
import Rating from "./Rate";

//Material-ui Icons
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#002d62",
    margin: "20px auto"
  },
  appBar: {
    width: "50%",
    margin: "0 auto"
  },
  tabs: {
    minWidth: "50%",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#034694",
      transition: "0.3s"
    }
  },
  tab: {
    backgroundColor: "#16171b",
    width: "100%",
    margin: "0 auto"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Styles for Top Menu either inside <Tabs /> OR each to all <Tab {menus} />
  let headerStyle = { margin: "0 auto" };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs
          className={classes.tab}
          style={headerStyle}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            className={classes.tabs}
            label="Home"
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tabs}
            label="Contact"
            icon={<ContactMailIcon />}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ForecastAPI />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form />
        <Rating />
      </TabPanel>
    </div>
  );
}
