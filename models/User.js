// models/User.js
import mongoose from 'mongoose';
import { type } from 'os';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
  email: String,
});

// Check if the model is already compiled to avoid re-compilation issues in development
export default mongoose.models.User || mongoose.model('User', UserSchema);