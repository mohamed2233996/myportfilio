import { createClient } from '@supabase/supabase-js';

// بنجيب القيم ونحط قيم وهمية فقط لو مش موجودة عشان الـ Build يعدي
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);