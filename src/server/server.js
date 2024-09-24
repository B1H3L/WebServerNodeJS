const express = require('express')

const path = require('path')

const statServer = (options) =>{
    const {port, public_path = 'public'} = options
    
    const app = express()

//para poder user middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) //contenio estatico disponible
    app.get(("*"),(req,res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
}

module.exports = {
    statServer
}