import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    role: {
        type: String,
        default: "admin",
    }
}, {
    timestamps: true
})

if (mongoose.models.User) {
    delete mongoose.models.User;
}

const User = mongoose.model("User", UserSchema)

export default User;