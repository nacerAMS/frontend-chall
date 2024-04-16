import {NextResponse} from  "next/server";
import connecntMongodb from "../../../../libs/mongodb";
import User from "../../../../models/user";

export async function POST(req){
    try{const {email,username, password} = await req.json()

    await connecntMongodb();

    const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" },
             { status: 400 }
            );
        }

    await User.create({email, username, password})

    return NextResponse.json({message:"User has been created successfully"},{status: 201})}
    catch(error){
        console.error(error);
        return NextResponse.json({message: "Error creating user"}, {status: 500});
   
        
    }

}

