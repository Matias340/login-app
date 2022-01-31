import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinUsersRequested } from '../../redux/Actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const initialState = {
    name: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState("");  
  const { name, password } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user= useSelector((state)=>state.auth.userLogged) 
  
  useEffect(() => {
  if(user == null){
    setError("usuario incorrecto")
  }else{
    setTimeout(() => navigate("/"), 2000);
    toast.success('usuario logeado', {
      position: 'top-right',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setError("");
  }
  console.log(user)
  }, [user]);


  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!name || !password) {
      setError("Por favor llene los campos");
    }else{
    dispatch(signinUsersRequested(formValue));
  }
 };

 const onInputChange = (e) => {
  let { name, value } = e.target;
  setFormValue({ ...formValue, [name]: value });
};
  
    return(
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
       <form onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '4px', paddingLeft: '20px', paddingRight: '20px'}}>
        <h2>Sign In</h2>  
        <TextField 
        style={{ width: "300px", marginBottom:'30px' }} 
        id="outlined-name" 
        label="Name" 
        name="name"
        value={name}
        type="text"
        onChange={onInputChange} />
        <br />
        <TextField style={{ width: "300px", marginBottom:'30px' }} 
        id="outlined-password" 
        label="password" 
        name="password"
        value={password}
        type="password"
        onChange={onInputChange}/>
        <br />
       <Button
         style={{ width: "100px", marginTop: "20px", marginBottom: "20px" }}
         variant='contained' 
         color='primary'
         type='submit'>
           Sign In
       </Button>
       </form>
     </div>   
    </Box>
         
</div>
    )
  };
  
  export default SignIn;