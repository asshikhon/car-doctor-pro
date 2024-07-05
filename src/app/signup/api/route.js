import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST= async (request) => {
const newUser = await request.json();
try {
    const db = await connectDB()
    const userCollection = await db.collection('users')
    const exist =await userCollection.findOne({email: newUser.email})
    if(exist) return Response.json({error: 'Email already exists'}, {status : 400})
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    const resp = await userCollection.insertOne({...newUser, password : hashedPassword});
    return Response.json({message: 'User Created'}, {status : 200})
} catch (error) {
    return Response.json({message: 'Something wrong', error}, {status : 500})

}


}