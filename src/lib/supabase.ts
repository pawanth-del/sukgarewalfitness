import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
console.log('🚨 Supabase Anon Key:', supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);

