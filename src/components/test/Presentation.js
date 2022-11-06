import React from 'react';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from "../Tables/EmployeesOnBoardTable/Presentation"
import { Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { FiSearch } from "react-icons/fi";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  root1: {
    padding: '2px 4px',
    alignItems: 'center',
    width: 500,
    flexDirection:"flex-end",
    marginLeft:"300px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
    
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper position="static" style={{backgroundcolor:"white"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="NOT Assigned" {...a11yProps(1)} />
          <Tab label="In-Progress" {...a11yProps(2)} />
          <Tab label="Upcoming" {...a11yProps(3)} />
          <Tab label="Complete" {...a11yProps(4)} />
          <Paper  className={classes.root1}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
      />
              <FiSearch />     
    </Paper>
         
        </Tabs>
    
      </Paper>
      <TabPanel value={value} index={0}>
        <Table/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Table/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Table/>
      </TabPanel>
      <TabPanel value={value} index={3}>
  utfdtxezrw
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Table/>
      </TabPanel>
    </div>
  );
}