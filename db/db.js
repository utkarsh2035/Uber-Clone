import mongoose, { mongo } from "mongoose";

function connectToDB(){
    const connection = mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to database")
    })
}

export default connectToDB