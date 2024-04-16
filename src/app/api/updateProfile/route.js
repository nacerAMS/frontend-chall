import connecntMongodb from "../../../../libs/mongodb";
import Profile from "../../../../models/profile";
import { NextResponse } from "next/server";

export async function PUT(req){
    await connecntMongodb();

    const {newName: name,newBrt: birthday, newHeirgt: height, newWieght: weight,
         newInts: interests} = req.json()

    await connecntMongodb();


    const Profiles= await Profile.findOneAndModify({newName,newBrt, newHeirgt, newWieght, newInts});

    return NextResponse.json(Profiles);
}