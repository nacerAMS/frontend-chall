import connecntMongodb from "../../../../libs/mongodb";
import Profile from "../../../../models/profile";
import { NextResponse } from "next/server";

export async function GET(){
    await connecntMongodb();
    const Profiles= await Profile.find();

    return NextResponse.json(Profiles);
}