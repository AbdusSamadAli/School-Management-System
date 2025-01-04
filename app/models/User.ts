// models/User.ts
import mongoose, { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  role: "student" | "teacher";
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true },
});

export default mongoose.models.User || model<IUser>("User", UserSchema);
