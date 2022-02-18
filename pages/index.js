import React, {useState} from "react";
import axios from "axios";
import { Stack, TextField, Button, Alert, Backdrop } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { mockApiUrl, API_SUCCESS, API_ERROR } from "../constants";
import NavAlert from "../components/NavAlert";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(() => ({
  container: {
    padding: '2em 1em'
  },
  
  submit: {
    width: '50%',
    marginTop: '2em',
    margin: 'auto'
  }
}))

export default function Home() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [bookingNumber, setBookingNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [containerNumber, setContainerNumber] = useState('');
  const [alert, setAlert] = useState('');
  const classes = useStyles();

  const handleSubmit = () => {
    axios.post(`${mockApiUrl}/createUser`, {
      name, phoneNumber, company, bookingNumber, customerName, containerNumber
    })
    .then(() => {
      setAlert(API_SUCCESS);
    })
    .catch(() => {
      setAlert(API_ERROR)
    });
  }

  return (
    <div className={classes.container}>
      <Stack spacing={2} direction='column' alignItems="center">
        <Stack spacing={2} direction={{xs: 'column', sm: 'column', md: 'row'}} alignItems="center">
          <TextField required label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextField required label="Phone Number" variant="filled" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <TextField required label="Hauling Company" variant="filled" value={company} onChange={(e) => setCompany(e.target.value)}/>
        </Stack>
        <Stack spacing={2} direction={{xs: 'column', sm: 'column', md: 'row'}} alignItems="center">
          <TextField required label="Loading/Booking Number" variant="filled" value={bookingNumber} onChange={(e) => setBookingNumber(e.target.value)}/>
          <TextField required label="Customer Name" variant="filled" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
          <TextField required label="Container Number" variant="filled" value={containerNumber} onChange={(e) => setContainerNumber(e.target.value)}/>
        </Stack>
        <Button className={classes.submit} size="medium" variant="contained" onClick={handleSubmit}>Submit</Button>
      </Stack>
      <NavAlert alert={alert} handleClose={() => setAlert('')} />
    </div>
  )
}
