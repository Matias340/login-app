import React, {useState} from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUsersRequested } from '../../redux/Actions/actions';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
   
  const initialState = {
    name: "",
    password: "",
    email: "",
    address: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState("");  
  const { name, password , email, address } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!name || !password || !email || !address) {
      setError("Por favor llene los campos");
  } else {
    dispatch(createUsersRequested(formValue));
    setTimeout(() => navigate("/signin"), 3000);
    toast.success('usuario creado', {
      position: 'top-right',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setError("");
  }
 };

 const onInputChange = (e) => {
  let { name, value } = e.target;
  setFormValue({ ...formValue, [name]: value });
};


  return (
  <div>
    <ToastContainer />
       <Box
             sx={{  '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop: '150px', marginLeft: 'auto' , 
             marginRight: 'auto',display: 'flex', flexDirection: 'column',alignItems: 'center'}}
             noValidate
            autoComplete="off"
            >
        <div>
        {error && <h3 style={{ color: "red" }}>{error}</h3>} 
       <form onSubmit={handleSubmit} 
       style={{ border: '1px solid black', borderRadius: '4px', 
       paddingLeft: '20px', paddingRight: '20px'}}>
        <h2>Registration</h2>  
        <TextField style={{ width: "300px", marginBottom:'30px' }} id="outlined-name" label="Name" name="name" type="text" onChange={onInputChange}/>
        <br />
        <TextField style={{ width: "300px", marginBottom:'30px' }} id="outlined-email" label="Email" name="email" type="email" onChange={onInputChange}/>
        <br />
        <TextField style={{ width: "300px", marginBottom:'30px' }} id="outlined-password" label="password" name="password" type="password" onChange={onInputChange}/>
        <br />
        <TextField style={{ width: "300px", marginBottom:'30px' }} id="outlined-address" label="address" name="address" type="text" onChange={onInputChange}/>
        <br />
       <Button
         style={{ width: "150px", marginTop: "20px", marginBottom: "20px" }}
         variant='contained' 
         color='primary'
         type='submit'>
           check in
       </Button>
       </form>
     </div>   
    </Box>
  </div>
  )
};

export default Registration;
