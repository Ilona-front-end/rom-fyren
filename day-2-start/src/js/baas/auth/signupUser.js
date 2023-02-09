import { createClient } from '@supabase/supabase-js';

// make a connection to supabase

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

async function signupUser(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })
  if (error) {
    return error


  } else {
    return data;
  }
}
