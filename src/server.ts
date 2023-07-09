import mongoose from 'mongoose';
import app from './app';
import config from './config';

const port = 5000;

async function dbConnect() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('database is connected');

    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(`database is not connected`, error);
  }
}
dbConnect();
