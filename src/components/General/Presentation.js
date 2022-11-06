import { React, useState } from 'react'
import { Grid, Card } from '@mui/material'
import { MdModeEdit } from 'react-icons/md'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import '../../styles/General.css'
const Presentation = () => {
    const [personalInfo, setPersonalInfo] = useState({ Name: "Lokesh", "Middle Name": "Sai", "Last Name": "Tamiri", Gender: "Male", "Marital Status": "Single", "Date of Birth": "29-08-2022", Email: "sailokesh7875@gmail.com", phone: 7993598294, department: "Technology", "Job Title": "Front-end developer", "Date of Joining": "01-03-20220", employeeStatus: "Active", category: "W2", supervisor: "Yes", reportingManager: "Subhash", alternativeEmail: "lokesh5g2@sasi.ac.in", Branch: "New York", country: "USA", state: "New York" });


    const [emergencyContact, setEmergencyContact] = [{
        Name: "Lokesh", phone: 7993598294, Email: "sailokesh7875@gmail.com", Realation: "Brother",
        "Status": "Single",
    }];
    
    return (
        <div>
            <Card className="card">
                <header>
                    <h3 className="heading">Personal Info</h3>
                    <MdModeEdit className="editIcon" size={25} />
                </header>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    {Object.entries(personalInfo).map((each) => (
                        <Grid item xs={3}>
                            <span className="subHead">{each[0]}</span>
                            <p className="value">{each[1]}</p>
                        </Grid>
                    ))}
                </Grid>
            </Card>

            <Card className="card">
                <header>
                    <h3 className="heading">Emergency Contant</h3>
                    <BsFillPlusSquareFill className="plusIcon" size={25} />
                </header>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    {
                        <Grid item xs={6}>

                        </Grid>
                    }
                </Grid>
            </Card>
        </div>
    )
}

export default Presentation