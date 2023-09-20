import connectDb from "../../../../DB/connect";
import us from "../../../../DB/models/userSchema";
import { NextResponse, NextResponse as nr } from "next/server";

type USER_LOGIN = {
  email: string;
  phone_number: number;
  password: string;
  role: string;
  status: string;
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await connectDb();
    const { email, phone_number, password }: USER_LOGIN = await req.json();
    const user: any = await us.findOne({ email, phone_number, password });
    if (!user) {
      return nr.json({ error: "Invalid credentials" }, { status: 400 });
    }
    await us.findOneAndUpdate(
      { email, phone_number, password },
      {
        $set: {
          status: "login",
        },
      }
    );
    return nr.json({ user, u_id: user?._id }, { status: 200 });
  } catch (error) {
    console.log("Field Request... Login Request", error);
    return nr.json({ error }, { status: 400 });
  }
};

// login
