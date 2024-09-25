import { envs } from './config/env.js'
import { statServer } from './server/server.js'
const main = () => {
    statServer({
        port : envs.PORT,
        public : envs.PUBLIC_PATH
    }
    )
}
//funcion agnostica autoconvocada
//agnostica porque no tiene nombre
(async()=>{
    main()
})()

