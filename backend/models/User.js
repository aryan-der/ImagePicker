import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 descriptor: [Number]
});

const User = mongoose.model("User", userSchema);

export default User;