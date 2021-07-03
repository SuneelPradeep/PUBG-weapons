import { Container, Typography, Button } from "@material-ui/core";
import Notecard from "../Notecard";
import Masonry from 'react-masonry-css';
import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

 const Notes = () => {

     const history = useHistory();
    const [notes, setnotes] = useState([]);

     const callData = async () =>{
           try{
            const res = await fetch('/notes', {
              method:'GET',
              headers:{
                Accept:"application/json",
                "Content-Type": "application/json",
              }          
            })
            const data =  await res.json()
              setnotes(data)
              console.log(data)
              
           }
           catch(e){
                console.log(e)
           }
     }
    
          useEffect(() =>
          {
           callData()
          },[])


          const deleteid = (id) =>{
                console.log(id);
                       fetch('/notes', {
                          method:'DELETE',
                          headers:{ Accept:'application/json',
                                    "Content-Type": "application/json"       
                        },
          
                        body: JSON.stringify({id})
                      }).then(res=>{
                        console.log(res)                
                 const newnotes = notes.filter(val => val._id !== id);
                       setnotes(newnotes) 
                       history.push('/notes')             
                      }).catch((err)=>{
                              console.log(err);
                      })                         
                    }                    
   
          const breakpoints = {
            default:3 ,
            1100 :2 ,
            700 : 1
          }
     return ( 
         <>
         <Container>
         <Typography variant='h4' align='center' className='my-5 col-xl-10 col-10 col-md-10 col-lg-10 mx-auto'>
             Details of PUBG Weapons
             <hr className='w-50 mx-auto'/>
         </Typography>
         <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
          { notes.map(val =>
           ( 
                   <div key={val._id}>
                       <Notecard val={val} deleteid={deleteid}/>
                         {/* <Typography>{val.wname}</Typography> */}
                         {/* <Button onClick={()=>deleteid(val._id)} >delete</Button> */}

                         {/* <Button onClick={handledelete(val._id)}>delete</Button> */}
                   </div>
         ))
            }
            </Masonry>
            </Container>
         </>
      );
 }
  
 export default Notes;