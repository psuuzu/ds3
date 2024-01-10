import { createClient } from "@/utils/supabase/client";

export async function getUser () {
	const supabase = createClient()
	const { data: { user } } = await supabase.auth.getUser()
	return user
}

export async function signIn () {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
}

export async function signOut () {
  const supabase = createClient()
  await supabase.auth.signOut()
  return redirect('/admin/login')
}