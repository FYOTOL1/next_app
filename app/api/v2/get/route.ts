import { headers } from "next/headers";
import { NextResponse as nr } from "next/server";
import connectDb from "../../../DB/connect";
import us from "../../../DB/models/userSchema";

export const GET = async (req: Request) => {
  try {
    await connectDb();
    const userId = headers().get("u_id");
    const findUser = await us.findOne({ _id: userId });

    if (findUser?.role == "admin") {
      const getUsers = await us.find();
      return nr.json(getUsers, { status: 200 });
    }
    return nr.json({ message: "Can't Access This Page +_+" }, { status: 404 });
  } catch (error) {
    return nr.json({ error: error }, { status: 403 });
  }
};
