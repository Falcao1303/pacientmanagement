import * as React from 'react';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const initialFValues = {
  id: '',
  name:  '',
  address:'',
  city:  '',
  state: '',
  zip:    '',
  country:'',
}
export default function PacientForm() {
  const [values, setValues] = useState(initialFValues);
  

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const resetForm = () => {
    console.log('reset chamou');
    setValues(initialFValues);
}

  const saveRegister = () => {
    axios.post('http://localhost:3001/api/pacient/', {
      name: values.name,
      email: values.email,
      adress: values.address,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
    }).then((response) => {
      console.log("sucesso");
      resetForm();
    })
  }

  return (

    <React.Fragment>
    <Container component="main" maxWidth="lg" sx={{ mb: 10 , w: -50}}>
    <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={10}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            value = {values.name}
            autoComplete="given-name"
            defaultValue={resetForm}
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            value = {values.address}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
        
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value = {values.city}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            id="state"
            name="state"
            value = {values.state}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value = {values.zip}
            label="Zip / Postal code"
            fullWidth

            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            value={values.country}
            autoComplete="shipping country"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Button
            variant="contained"
            onClick={() => saveRegister()}
            sx={{ mt: 3, ml: 1 }}
            >
        {'Submit'}
       </Button>
      </Grid>
    </Container>

    </React.Fragment>
  );
}
