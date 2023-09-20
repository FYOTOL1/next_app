import { NextResponse as nr } from "next/server";
import connectDb from "../../../../DB/connect";
import us from "../../../../DB/models/userSchema";

type USER = {
  username: string;
  phone_number: number;
  email: string;
  password: string;
  status: string;
  role: string;
};

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const { username, phone_number, email, password, status, role }: USER =
      await req.json();
    const getAll: any = await us.find();
    const check = await getAll.some(
      (e: any) => e.email == email || e.phone_number == phone_number
    );
    if (!check) {
      const PostUser = await us.create({
        username,
        phone_number,
        email,
        password,
        status,
        role,
      });

      return nr.json(PostUser, { status: 200 });
    }
    return nr.json({ message: "User Already Exist" }, { status: 400 });
  } catch (error) {
    return nr.json(error, { status: 500 });
  }
};
// signup
