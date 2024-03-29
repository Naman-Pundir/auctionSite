import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
class UserController {
  static userRegistration = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    if(password != confirmPassword){
      res.send({"status": "failed", "message":"unequal"})
    }else{
      const user = await UserModel.findOne({ email: email })
        if (user) {
          res.send({ "status": "failed", "message": "Email already exists" })
        } else {
          if (name && email && password ) {
              try {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const doc = new UserModel({
                  name: name,
                  email: email,
                  password: hashPassword,
                  // tc: tc
                })
                await doc.save()
                res.status(201).send({ "status": "success", "message": "Registration Success"})
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

  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (email && password) {
        const user = await UserModel.findOne({ email: email })
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password)
          if ((user.email === email) && isMatch) {
            res.send({ "status": "success", "message": "Login Success" })
          } else {
            res.send({ "status": "failed", "message": "Email or Password is not Valid" })
          }
        } else {
          res.send({ "status": "failed", "message": "You are not a Registered User" })
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

export default UserController