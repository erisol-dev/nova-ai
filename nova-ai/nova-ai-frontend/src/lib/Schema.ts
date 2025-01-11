import { z } from 'zod';
//.email({ message: "Invalid email address" })
const EmailSchema = z.string();
const PasswordSchema = z.string().min(6, { message: "Password must be at least 6 characters long" });

// Login Schema
export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

// Register Schema
export const RegisterSchema = z.object({
  username: z.string(),
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: z.string()
});
