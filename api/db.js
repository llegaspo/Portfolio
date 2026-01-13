import mongoose from 'mongoose';


async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;
  console.log("mongo uro", MONGODB_URI);

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
  }

  let cached = global.mongoose;

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    };

    console.log("Connecting to MongoDB..."); // Log attempt

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Mongoose connected successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB Connection Error:", e); // This will show up in Vercel Logs
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
