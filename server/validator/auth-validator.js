const {z} = require("zod");

const loginSchema = z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be least of 3 chars"})
    .max(255, {message:"Email must not be more than 255 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be least of 6 charactors"})
    .max(1024, {message:"password cannot be greater than 1024 characters"}),
});

const signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be least of 3 chars"})
    .max(255, {message:"Name must not be more than 255 characters"}),

    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"Phone must be least of 10 chars"})
    .max(255, {message:"Phone must not be more than 20 characters"}),
});

module.exports = {signupSchema, loginSchema};

