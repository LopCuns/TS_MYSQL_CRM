import dotenv from "dotenv"
import server from "./server/express"
// Configurar dotenv para acceder a las variables de entorno
dotenv.config()
// Encender el servidor
server.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
},)

