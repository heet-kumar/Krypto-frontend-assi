import {React,useState,useEffect} from "react";
import { Link,Button,Box,Typography,TextField} from '@mui/material';


const Signup = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [user,setuser] = useState();

    const EmailInput = (e) => {
        setemail(e.target.value);
    }
    const PasswordInput = (e) => {
        setpassword(e.target.value);
    }

    const storeInput = () => {
        setuser(JSON.parse(localStorage.getItem('kuser')));
        setuser(user.user.push({e:email,p:password}))
        console.log(user);
        localStorage.setItem('kuser', JSON.stringify(user));
    }

    return(
        <Box style={{ width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems: 'center' }}>
            <Box style={{boxShadow: '0px 0px 15px #000' }} sx={{borderRadius:2,zIndex:10,gap:2,px:3,py:4,width:'wrap-content',display: 'flex',flexDirection: 'column',justifyContent: 'center',backgroundColor:'#fff'}}>
                <Typography
                    sx={{ml:1,mb:2,color:'#000',fontSize:'150%'}} style={{fontWeight:'700'}}
                >
                    Create New Account
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
                    <Link sx={{textDecoration: 'none'}} href="/"><Typography sx={{}}>
                        Login page
                    </Typography></Link>
                    <Button onClick={storeInput} sx={{fontSize:'90%',fontWeight:'bold', py:1, px:4, borderRadius: 5}} variant="contained">Create Account</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Signup;