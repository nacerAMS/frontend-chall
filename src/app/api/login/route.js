import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import User from "../../../../models/user";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        await connectMongodb();
        const user = await User.findOne({ email });


        if (!user) {
            return NextResponse.json({message: "User not found"}, {status: 404});
        }

        if (password !== user.password) {
            return NextResponse.json({message: "Invalid password" }, {status: 401});
        }

        return NextResponse.json({message: "Login successful"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error logging in"}, {status: 500});
    }
}
