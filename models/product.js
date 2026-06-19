import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  image:{type:String,required:true},
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  category: { type: String }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);