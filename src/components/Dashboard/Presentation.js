import { Grid, Typography } from "@mui/material"
import { Card } from "@mui/material"
import { FaSuitcase } from "react-icons/fa"
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { BsBarChartLine } from 'react-icons/bs'
import '../../styles/Dashboard.css'
const useStyles = makeStyles({
    row: {
        display: "flex",
        justifyContent: "space-between"
    },
    row2: {
        display: "flex",
        padding: "10px"
    },
    col: {
        display: "flex",
        flexDirection: "column"
    },
    card: {
        padding: "15px",
        width: 271.97,
        height: 91
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
    }
});

const data = {
    placements: 4, essReq: 2, certifications: 6,
    reportingManager: "Ramu Venigandla",

    emergencyContacts: {
        name: "Lokesh",
        phone: "+1123456789",
        email: "sailokesh7875@gmail.com"
    }
}
const basicDetails = [["phone", 7993598294], ["maritalStatus", "Single"], ["email", "lokesh5g2@sasi.ac.in"], ["mailingAddress", "1525 Buckskin tol, GA -- 30024"]]

const basicDetails2 = [["branch", "New York"], ["payrollId", "WSSFR287856"], ["visa", "H1B - 30 June 2023"], ["salary", 150000]]

const Presentation = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className="container">
        <Grid item sx={12} style={{ display: 'flex', justifyContent: "space-between", padding: "10px", marginLeft: "70px" }}>
            <Grid container spacing={2}>
            <Grid item lg={12}>
            <div style={{ marginTop: "10px", color: "lightpink", height: "40px", borderRadius: "16px" }}>
                <h1 style={{width:"30px"}}>Overview</h1>
            </div>
                </Grid>
                <Grid item sx={4}>
                    <Card className={`${classes.row} ${classes.card}`}>
                        <Box className="color-success"> <FaSuitcase size="30px" /> <p >Placements</p></Box>
                        <Box className="color-success"><Typography variant="h2" component="h2">{data.placements}</Typography></Box>
                    </Card>
                </Grid>
                <Grid item sx={4}><Card className={`${classes.row} ${classes.card}`}>
                    <Box className="color-success"> <FaSuitcase size="30px" /> <p>ESS Requests</p></Box>
                    <Box className="color-success"><Typography variant="h2" component="h2">{data.essReq
                    }</Typography></Box>
                </Card></Grid>
                <Grid item sx={4}><Card className={`${classes.row} ${classes.card}`}>
                    <Box className="color-warning"> <FaSuitcase size="30px" /> <p>Certifications</p></Box>
                    <Box className="color-warning"><Typography variant="h2" component="h2">{data.certifications}</Typography></Box>
                </Card></Grid>
                <Grid item lg={12}>
            <div style={{ marginTop: "10px", height: "70px", borderRadius: "16px",width:"80px" }}>
                <h1 style={{width:"40vw"}}>Employees Onboarding</h1>
            </div>
                </Grid>
                <br/>
            </Grid>
        </Grid>
        <Grid item sx={12}>
            <Grid container spacing={2}>
                <Grid item sx={8}>
                    egdrhtjyuhi
                </Grid>
                
                </Grid>
   
        </Grid>
    </Grid >
    )
}

export default Presentation