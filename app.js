
const dotenv = require('dotenv')
const express = require('express')

const app = express()

dotenv.config({ path: './config.env' })

app.use(express.json())
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000

require('./db/conn')


app.get('/', (req, res) =>{
    res.send('Hi welcome to our server')
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT , ()=>{
    console.log(`Server running at ${PORT}`);
})