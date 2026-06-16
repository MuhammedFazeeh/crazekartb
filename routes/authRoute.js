import express from 'express'
import { signinController, signupController } from '../controller/authController.js';
const authRoute = express.Router();


// Signup Route
authRoute.post('/signup', signupController);

// Login Route
authRoute.post('/signin', signinController);
// Export router
export default authRoute