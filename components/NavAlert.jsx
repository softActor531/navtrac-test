import React, {useState, useEffect} from "react";
import { API_SUCCESS, API_ERROR } from "../constants";
import { Backdrop, Alert } from "@mui/material";

export default function NavAlert({alert, handleClose}) {

  return (
    <>
      {
        alert === API_SUCCESS && 
        (<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          onClick={handleClose}
        >
          <Alert variant="outlined" severity="success">
            Thanks, your contact information is registered.
          </Alert> 
        </Backdrop> 
        )
      }
      {
        alert === API_ERROR && 
        (<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          onClick={handleClose}
        >
          <Alert variant="outlined" severity="error">
            There were some errors registering your information.
          </Alert>
        </Backdrop>)
      }
    </>
  )
}