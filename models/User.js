// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userBio: {
    type: {
      country: String,
      inCanada: Boolean,
      whySeekAsylum: String,
    },
    required: false, // Adjust this based on your requirements
  },
});

// Avoid recompiling the model in development
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;