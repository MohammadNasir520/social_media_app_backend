import mongoose from 'mongoose';
import app from './app';

const port = 5000;

async function dbConnect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/social_media_app');
    console.log('database is connected');

    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(`database is not connected`, error);
  }
}
dbConnect();
