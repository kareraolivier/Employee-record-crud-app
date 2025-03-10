import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

export type User = mongoose.InferSchemaType<typeof UserSchema>;

export type Users = User[];

export type UserWithId = User & { _id: string };

export type UsersWithId = UserWithId[];

export type UserWithoutId = Omit<User, "_id">;

export type UsersWithoutId = UserWithoutId[];
