import mongoose from "mongoose";

export const connectionDB = async() => {
    mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: "E-commerceDB",
    })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((e)=>{
        console.log(`Database Connection Failed due to ${e.message}`);
        
    })
}