import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { Container, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as MiIcons from 'react-icons/md';
import Radio from '@material-ui/core/radio';
import {makeStyles} from '@material-ui/core';
import { useState } from "react";
import { useHistory } from "react-router";

 const useStyles = makeStyles({
     field:{
         marginBottom:20,
         marginTop :30,
         display:'block',
         
     },
     title: {
         marginTop :20
     },
     color:{
         color:'#18dcff'
     }
 })


  const Create = () => {

    const [details, setdetails] = useState('');
  const [wname, setwname] = useState('');
  const [wammo, setwammo] = useState('5');
  const [ern , setern] = useState(false);
  const [erd, seterd] = useState(false);
  const his= useHistory();

  const onSubmit = (e) => {
        e.preventDefault();
        setern(false);
        seterd(false);

        if(wname ===''){
            setern(true);
        }
        if(details ===''){
            seterd(true);
        }
        if(wname && details) {
            fetch('/create',{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify({wname, wammo, details})
            }).then(()=> his.push('/notes'))
        }    
  }

    const classes= useStyles();
      return ( 
          <>
          <Container>
          <Typography className={classes.title} variant='h4' color='textSecondary' component='h2' noWrap gutterBottom>
                Create a Weapon
          </Typography>
          <form>
              <TextField onChange={(e)=>setwname(e.target.value)} value={wname} className={classes.field} 
              label='Enter Weapon Name' variant='outlined'  color='Default' 
              required fullWidth
              error={ern} />
          
        
              <TextField onChange={(e)=>setdetails(e.target.value)} value={details} 
              className={classes.field} label='Enter detailss of Weapon' variant='outlined' 
              multiline rows={4} color={classes.color} required 
              fullWidth error={erd} />

              
              <FormControl className={classes.field}>
              <FormLabel>Ammo </FormLabel>
              <RadioGroup value={wammo} onChange={(e)=> setwammo(e.target.value)} sm={6} md={6} lg={6} xl={6}> 
              <FormControlLabel control={<Radio />} label='7.62' value='7.62mm'  />
              <FormControlLabel control={<Radio />} label='5.56' value='5.56mm'  />
              <FormControlLabel control={<Radio />} label='9mm' value='9mm'  />
              <FormControlLabel control={<Radio />} label='0.44Magnum' value='0.44Magnum'  />
              <FormControlLabel control={<Radio />} label='0.45cp' value='0.45cp'  />
              <FormControlLabel control={<Radio />} label='12 Gauge' value='12 Gauge'  />
              </RadioGroup>
              </FormControl>

       <Button className={classes.btn} variant='contained' type='submit' color='secondary' onClick={onSubmit} startIcon={<MiIcons.MdDone /> }
       endIcon={<ExitToAppIcon />}>
            SUBMIT
       </Button>
       </form>

</Container>
          </>
       );
  }
   
  export default Create;