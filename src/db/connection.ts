import mongoose, { connect, connection } from "mongoose";
const db = () => {
  mongoose.set('strictQuery', false);
    // @ts-ignore
  connect(process.env.MONGO_URL_DEV)
    .then(() => console.log("Mongo connected"))
    .catch(() => console.log("Error connect Mongo"));
  process.on("SIGINT", () => {
    connection.close(() => {
      console.log("Mongo disconnected");
      process.exit(0);
    });
  });
};

export default db