import Ajv from 'ajv/dist/core'
import addFormats from 'ajv-formats'
import ajvErrors from 'ajv-errors'
import { Request, Response } from 'express'
import { BAD_REQUEST } from '../server/errors/request.errors'



const customerSchema = {
  type: 'object',
  properties: {
    c_id : {
      type: 'integer',
      errorMessage: {
        type: 'c_id debe ser del tipo integer'
      }
    },
    c_name: {
      type: 'string',
      errorMessage: {
        type: 'c_name debe ser del tipo string'
      }
    },
    c_email: {
      type: 'string',
      format: 'email',
      errorMessage: {
        type: 'c_email debe ser del tipo string',
        format: 'c_email debe cumplir con el formato email'
      }
    },
    c_phone: {
      type: 'integer',
      format: 'phone',
      errorMessage: {
        type: 'c_phone debe ser del tipo integer',
        format: 'c_phone debe ser un número de teléfono váldo'
      }
    }
  },
  required : ['c_id','c_name','c_email','c_phone'],
  additionalProperties: false,
  errorMessage: {
    type: 'El contenido de la petición debe ser del tipo objeto',
    required: {
      c_id: 'c_id es requerido',
      c_name: 'c_name es requerido',
      c_email: 'c_email es requerido',
      c_phone: 'c_phone es requerido'
    },
    additionalProperties: 'No se admiten propiedades adicionales'
  }
}


const ajv = new Ajv({ allErrors: true })
addFormats(ajv,['email'])
ajv.addFormat('phone',/[0-9]{9}/)
ajvErrors(ajv)

const validator = ajv.compile(customerSchema)

function registerUserDTO(req: Request, res: Response, next: () => void){
  const  isValidDTO = validator(req.body)
  console.log(isValidDTO)
  if (!isValidDTO) return res.status(400).send({ errors: validator.errors?.map(error=> error.message) })
  next()
}

export default registerUserDTO