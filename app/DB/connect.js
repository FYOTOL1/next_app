const mongoose = require("mongoose");

export default async function connectDb() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://fyotol:FYOTOL2008@cluster0.2ybaklw.mongodb.net/cashier?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected");
    return conn;
  } catch (error) {
    console.log("ERROR", error);
  }
}
