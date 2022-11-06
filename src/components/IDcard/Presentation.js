import React from 'react'
import { Grid, Typography } from "@mui/material"
import { Card } from "@mui/material"
import { Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FaSuitcase } from "react-icons/fa"
import { Box } from "@mui/material";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { BsPersonFill } from "react-icons/bs";
// import { alpha } from '@material-ui/core';
import Table from "../Tables/EmployeesOnBoardTable/Presentation"
import Test from "../test/Presentation"
import InputBase from '@material-ui/core/InputBase';




const useStyles = makeStyles((theme)=>({
    row: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:"D7D2B8"
        },
    row2: {
        display: "flex",
        padding: "10px"
    },
    col: {
        display: "flex",
        flexDirection: "column",
        backgroundColor:"D7D2B8"
    },
    card: {
        padding: "15px",
        width: 371.97,
        height: 78.62,
        marginLeft:"20px"
    },
    reportingManager: {
        height: 91,
        width: 407,
        padding: "10px"
    },
    card2: {
        padding: "10px",
        width: 271.97,
    },
    basicDetails: {
        width: 847,
        padding: "20px",
        height: 207
    },
    emergencyContacts: {
        padding: "20px",
        width: 403,
        height: 207
    },
    documents: {
        padding: "20px",
        width: 403,
        height: 207,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    tableRow: {
        marginRight: "30px"
    },
    table: {
        marginTop: 10
    },
    card3: {
        padding: "10px",
        width: 271.97,
        height: 446,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    docEle: {
        width: 183,
        padding: "8px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
    },
    timesheets: {
        height: 69,
        width: 183
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    
}));

const data = {
    placements: 100, essReq: 60, certifications: 50,
    reportingManager: "Ramu Venigandla",

    emergencyContacts: {
        name: "Lokesh",
        phone: "+1123456789",
        email: "sailokesh7875@gmail.com"
    }
}


const Presentation = () => {
    const classes = useStyles();

    return (
        <div style={{marginLeft:"8%"}}>
        <div style={{display:"flex",width:"90%"}}>    
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"57px"}}>
      <p style={{color:"#7D7655",width:"10%"}}>EmplooyeOnboardingPortal</p>
      </div>              
            <div style={{justifyContent:"flex-end",marginLeft:"134vh"}}>   
                <div style={{ display: "flex",justifyContent:"flex-end",marginTop:"37px" }}>
                    <Avatar src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" sx={{ height: 55, width: 55 }} />
                    <div style={{ marginTop: "20px",justifyContent:"flex-end",top:"37px" }}>
                        <h2 >XYZ</h2>
                    </div>
                </div>
            </div>
        </div>
           <div style={{marginTop:"30px",display:"flex"}}>
  
             <h1 style={{color:"#D7D2B8",width:"272px",height:"80px" }}>Overview </h1>

             <ButtonGroup size="small" aria-label="small outlined button group" style={{marginLeft:"830px",height:"24px"}}>
        <Button>Days</Button>
        <Button style={{backgroundColor:"D7D2B8"}}>Weeks</Button>
        <Button>Months</Button>
      </ButtonGroup>
           
           </div>
           <Grid container spacing={2}>

           <Grid item sx={2}>
                <Grid container spacing={2}>
                    <Grid item sx={3}>
                        <Card className={`${classes.row} ${classes.card}`}>
                            <Box className="color-success" style={{color:"skyblue",backgroundColor:"D7D2B8"}}> <BsPersonFill size="30px" /> <p >Introduced Employees</p></Box>
                            <Box className="color-success" style={{color:"skyblue"}}><Typography variant="h4" component="h4">{data.placements}</Typography></Box>
                        </Card>
                    </Grid>
                    <Grid item sx={3}><Card className={`${classes.row} ${classes.card}`}>
                        <Box className="color-success"> <FaSuitcase size="30px" /> <p>Induction In-Progress</p></Box>
                        <Box className="color-success"><Typography variant="h4" component="h4">{data.essReq}</Typography></Box>
                    </Card></Grid>
                    <Grid item sx={3}><Card className={`${classes.row} ${classes.card}`}>
                        <Box className="color-warning"> <FaSuitcase size="30px" /> <p>upcoming Induction</p></Box>
                        <Box className="color-warning"><Typography variant="h4" component="h4">{data.certifications}</Typography></Box>
                    </Card></Grid>
                    
                </Grid>
            </Grid>
            </Grid>
            
      <h4 style={{width:"277",height:"32px",marginTop:"32px"}}>  Employees Onboarding</h4>
            <Paper  elevation={3}>
               <div>
              <Test/>
               </div>
            </Paper>
        </div>
    )
}

export default Presentation