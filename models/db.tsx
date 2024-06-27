// lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect(): Promise<typeof mongoose> {
  const opts = {
    bufferCommands: false,
  };

  await mongoose.connect(MONGODB_URI as string, opts);
  return mongoose;
}

export default dbConnect;
