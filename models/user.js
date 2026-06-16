import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';


// ==================== USER SCHEMA ====================
const userSchema = new mongoose.Schema({
    // Email - Required, Unique, Validated
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },

   // First Name - Required
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },

  // Last Name - Optional
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },

  // Password - Required, Min length 6
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },

  
// Phone Number - Optional
  phoneNumber: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },

  // Address - Optional
  address: {
    type: String,
    trim: true,
    maxlength: [200, 'Address cannot exceed 200 characters']
  },

  // Role - Required (user or admin)
  role: {
    type: String,
    required: true,
    enum: {
      values: ['user', 'admin'],
      message: 'Role must be either "user" or "admin"'
    },
    default: 'user'
  },

  // Is Active - Required
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },

  // Email Verified
  isEmailVerified: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

// ==================== INSTANCE METHOD: comparePassword ====================
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// ==================== CREATE MODEL ====================
export const User = mongoose.model('User', userSchema);