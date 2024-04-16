import { mongoose, Schema } from "mongoose";

const userSchema = new Schema(
    {
        email:{type: String, required: true},
        username:{type: String, required: true},
        password: {type: String, required: true}
    },
    {timestamps: true}
)

const User= mongoose.model("USer", userSchema);

export default User;