import userModel from "../models/user.model";
import userService from "../services/user.service";
import {validationResult} from "express-validator";

export default registerUser = async(req, res, next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {fullName, email, password} = req.body
    const hashedPassword = await userModel.hashedPassword(password)

    const user = await userService.createUser({
        firstName:fullName.firstName, lastName:fullName.lastName, email, password: hashedPassword
    })

    const token = user.generateAuthToken()
    res.status(201).json({token})
}