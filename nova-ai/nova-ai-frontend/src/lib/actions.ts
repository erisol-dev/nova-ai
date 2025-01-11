'use server';

import { supabase } from './supabaseClient';
import { LoginSchema, RegisterSchema } from './Schema';
import { revalidatePath } from 'next/cache';

export async function Login(formData: FormData) {

  const { email, password } =  LoginSchema.parse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  console.log(`Email: ${email} - Password: ${password}`)
  
  /*
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  */
}

export async function Register(formData: FormData) {
  
  const { username, email, password } =  RegisterSchema.parse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })

  console.log(`UserName: ${username} - Password: ${password}`)

  /*
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  */
}
