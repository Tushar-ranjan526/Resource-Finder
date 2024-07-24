import mongoose from 'mongoose';

//  connection karenge.
export async function connect(){
    try{
        // ! garuantee dene ke liye ki mongo_uri mei hai link.
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("Connected to MongoDB...");
        })
        connection.on('error',(err)=>{
            console.log("Error in connecting to MongoDB :",err);
            process.exit(1);
        })
    }
    catch(err){
        console.log("Something went wrong in connecting to db :",err);
    }
}