import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      detailUrl: {
        type: String,
        required: true,
       
      },
      title: {
        type: Object,
        required: true,
       
      },
      price: {
        type: Object,
        required: true,
       
      },
      quantity: {
        type: String,
        required: true,
       
      },
      description: {
        type: String,
        required: true,
       
      },
      discount: {
        type: String,
        required: true,
      
      },
      tagline: {
        type: String,
        required: true,
      },
  });
export default mongoose.models.products || mongoose.model('products',testSchema);


