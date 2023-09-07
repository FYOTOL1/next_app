import { NextResponse as nr } from "next/server";
import connectDb from "../../../DB/connect";
import userSchema from "../../../DB/models/userSchema";

export const GET = async (req: Request) => {
  try {
    await connectDb();
    const getUsers = await userSchema.find();
    return nr.json(getUsers, { status: 200 });
  } catch (error) {
    console.log("ERROR User APi Get", error);
    return nr.json(error, { status: 400 });
  }
};

export const POST = async (req: Request) => {
  try {
    await connectDb();
    type USER = {
      username: string;
      phone_number: number;
      email: string;
      password: string;
    };
    const body = await req.json();
    const { username, phone_number, email, password }: USER = body;

    const postUser = await userSchema.create({
      username,
      phone_number,
      email,
      password,
    });

    return nr.json(postUser, { status: 201 });
  } catch (error) {
    return nr.json(error, { status: 400 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await connectDb();
    const { _id } = await req.json();
    const deleteUser = await userSchema?.deleteOne({ _id: _id });
    return nr.json(deleteUser, { status: 200 });
  } catch (error) {
    return nr.json(error, { status: 400 });
  }
};
