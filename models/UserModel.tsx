import mongoose from "mongoose";
const userModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
       
      },
      mobile: {
        type: String,
        required: true,
       
      }
  });
export default mongoose.models.users || mongoose.model('users',userModel);


