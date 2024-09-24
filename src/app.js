const {envs} = require('./config/env')
const {statServer} = require('./server/server')

const main = () => {
    statServer({
        port : envs.PORT,
        public : envs.PUBLIC_PATH
    }
    )
}

//funcion agnostica autoconvocada
//agnostica porqque no tiene nombre
(async()=>{
    main()
})()

