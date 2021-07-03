const express = require('express')
 const router = express.Router()
 require('../db/conn')
const User = require('../models/UserSchema')


  router.get('/notes', async (req, res)=>{
       try{
        const data = await User.find()
        res.send(data)
        console.log(data);
        res.status(200).json({message: "Succesfully displayed or got the data"})
       } 
       catch(e){
             console.log(e)
             res.status(400).json({message:"Data couldn't get"})
       }
          
  })

 router.post('/create', (req, res)=>{

           const { wname, wammo , details} = req.body

           if(!wname || !wammo || !details){
               res.status(400).json({message:'Plz Fill all the Fields'})
           }      
            const posted = new User(req.body)
            posted.save().then(()=>{
                console.log('Successfully added data');
                     res.status(200).json({message:'Successfully added the data'})
            }).catch((e)=>{
                console.log(e);
                    res.status(500).json({message:'Data not saved'})
            })
        //    res.send('Hey notes is here')
        console.log(req.body);      
            
 })
    

   router.delete('/notes', async (req, res)=> {
       console.log(req.body.id);
          try{
                const id =req.body.id;
                console.log(id);
                const notfound = await User.findByIdAndDelete(id);
                if(!notfound)
                {  res.status(400).json({message:'Not found'})  }
                  
                

                const data={
                    status:'Deleted Succesfully',
                    result:notfound

                }
                res.send(data)
                res.status(200).json({message:'Deleted Succesfully'})
                console.log('Deleted data');
                res.send('Deleted Successfully')
          }
          catch(e){
              console.log(e);
                res.status(500).json({message:'Error server'})
          }
          
   })




module.exports = router;