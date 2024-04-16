import mongoose from "mongoose";

const  connecntMongodb =async()=> {
    try{
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("database connexted")
    }catch(error){
        console.log(error)
    }
}

export default connecntMongodb;