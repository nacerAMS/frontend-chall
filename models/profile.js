import { mongoose, Schema } from "mongoose";

const profileSchema = new Schema(
    {
        name: {type: String, required: true },
        birthday: {type: String, required: true},
        height: {type: Number, required: true},
        weight: {type: Number, required: true},
        interests: {type:[String],default: []}
    },
    {timestamps: true}
)

const Profile= mongoose.model("Profile", profileSchema);

export default Profile;

