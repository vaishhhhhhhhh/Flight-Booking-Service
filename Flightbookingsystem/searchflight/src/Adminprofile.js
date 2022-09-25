
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Adminprofile() {
    const location = useLocation()
    const navigate = useNavigate();
    return (
        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
        <Button href='/flight' variant='contained'>Details of all flights</Button>
        <Button href='/addflight' variant='contained'>Add new flight details</Button>
        <Button href='/bookingdetails' variant='contained'>Details of flight Booking </Button>
        <Button href='/updateflight' variant='contained'>Update details of flights</Button>
        <Button  variant='contained' onClick={() => navigate('/user',{state: {jwt: location.state.jwt}})}> All User details</Button>


        </Stack>
    );
  }
  
  export default Adminprofile;