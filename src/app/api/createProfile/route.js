import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import Profile from "../../../../models/profile";

export async function POST(req) {
    try {
        const {name, birthday, height, weight, interests} = await req.json();

        await connectMongodb();

       await Profile.create({name, birthday, height, weight, interests})

        return NextResponse.json({message: "profile has been created"}, {status: 201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error creating profile"}, {status: 500});
    }
}
