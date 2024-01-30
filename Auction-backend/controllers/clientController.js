import clientModel from '../models/Client.js'
import bcrypt from 'bcrypt'

class clientController {
  static clientRegistration = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    if(password != confirmPassword){
      res.send({"status": "failed", "message": "unequal"})
    }else{
      const client = await clientModel.findOne({ email: email })
      if (client) {
        res.send({ "status": "failed", "message": "Email already exists" })
      } else {
        if (name && email && password ) {
            try {
              const salt = await bcrypt.genSalt(10)
              const hashPassword = await bcrypt.hash(password, salt)
              const doc = new clientModel({
                name: name,
                email: email,
                password: hashPassword,
                // tc: tc
              })
              await doc.save()
              res.status(201).send({ "status": "success", "message": "Registration Success" })
            } catch (error) {
              console.log(error)
              res.send({ "status": "failed", "message": "Unable to Register" })
            }
         
        } else {
          res.send({ "status": "failed", "message": "All fields are required" })
        }
      }
    }
  }

  static clientLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (email && password) {
        const client = await clientModel.findOne({ email: email })
        if (client != null) {
          const isMatch = await bcrypt.compare(password, client.password)
          if ((client.email === email) && isMatch) {
            res.send({ "status": "success", "message": "Login Success" })
          } else {
            res.send({ "status": "failed", "message": "Email or Password is not Valid" })
          }
        } else {
          res.send({ "status": "failed", "message": "You are not a Registered client" })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Login" })
    }
  }



}

export default clientController