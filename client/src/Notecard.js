import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core"
import { blue, green, orange, pink, red , yellow} from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
// import {useEffect, useState} from 'react';
// import { useHistory } from "react-router-dom";

 const useStyles = makeStyles({
     avatar:{
         backgroundColor: (val) =>
         {
                 if(val.wname==='AKM' )
                  return orange[700]
                  if(val.wname ==='M416')
                  return yellow[500]
                  if(val.wname === 'AWM')
                  return green[400]
                  if(val.wname === 'SKS')
                  return pink[500]
                  if(val.wname==='Vector')
                  return red[400]
                  if(val.wname==='S12K'){
                  return blue[600]
                  }
                  return blue[500]
         }  
     }
 })

 const Notecard = ({val, deleteid }) => {
    // const history = useHistory();
    // const [notes, setnotes] = useState([]);


    // const deleteid = async(id) =>{
    //     console.log(id);
    //           await fetch('/notes', {
    //               method:'DELETE',
    //               headers:{ Accept:'application/json',
    //                         "Content-Type": "application/json"       
    //             },
  
    //             body: JSON.stringify({id})
    //           }).then(res=>{
    //             console.log(res)                
    //      const newnotes = notes.filter(val => val._id !== id);
    //            setnotes(newnotes)             
    //           })    
    //         //   history.push('/notes') 
    //         }
   
     const classes = useStyles(val)
    
     return ( 
         <>
         <Card elevation={2}>
             <CardHeader 
                  avatar={<Avatar className={classes.avatar} src={val.avatar}>
                      {val.wname[0].toUpperCase()}
                      </Avatar>}
                action ={
                    <IconButton   onClick={()=>deleteid(val._id)}> 
                        <DeleteOutlined />
                    </IconButton>
                }
                title={val.wname}
                subheader={val.wammo}
             />
             <CardContent>
                 <Typography variant='body2' color='textSecondary'>
                     {val.details}
                 </Typography>
             </CardContent>

             
         </Card>
              
             
         </>  
      );
 }
  
 export default Notecard;