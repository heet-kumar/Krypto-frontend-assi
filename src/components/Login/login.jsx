import {React,useState,useEffect} from 'react';
import { Link,Button,Box,Typography,TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const history = useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [cred,setCred] = useState(true);
    // const [user,setuser] = useState();

    const EmailInput = (e) => {
        setemail(e.target.value);
    }
    const PasswordInput = (e) => {
        setpassword(e.target.value);
    }

    const credential_check = () => {
        if(email.length>0 && password.length>0){
            history('/products');
            console.log('credential check true');
            return setCred(true);
        }
        return setCred(false);
    }

    return(
        <Box style={{ width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems: 'center' }}>
            <Box style={{boxShadow: '0px 0px 15px #000' }} sx={{borderRadius:2,zIndex:10,gap:2,px:3,py:4,width:'wrap-content',display: 'flex',flexDirection: 'column',justifyContent: 'center',backgroundColor:'#fff'}}>
                <Typography
                    sx={{ml:1,mb:2,color:'#000',fontSize:'150%'}} style={{fontWeight:'700'}}
                >
                    Login
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '35ch' },
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField onChange={EmailInput} sx={{outlineRadius: 5,borderRadius: 5,backgroundColor:'#f8f9fa'}} id="outlined-basic" label="Email Address" type="email" variant="outlined" />
                    <TextField
                        sx={{borderRadius: 5,backgroundColor:'#f8f9fa'}}
                        id="outlined-password-input"
                        onChange={PasswordInput}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </Box>
                <Box sx={{display: 'flex',px:1,justifyContent: 'space-between'}}>
                    <Link sx={{textDecoration: 'none'}} href="/signup"><Typography sx={{width: '80%'}}>
                        New User? Create an account
                    </Typography></Link>
                    <Button onClick={(credential_check)} sx={{fontSize:'90%',fontWeight:'bold',px:5, borderRadius: 5}} variant="contained">Login</Button>
                </Box>
                {(!cred)? <Typography sx={{color:'red'}}> Invalid credentials </Typography>:<></>}
            </Box>
        </Box>
    );
}

export default Login;