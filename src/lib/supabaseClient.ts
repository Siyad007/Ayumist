import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR-PROJECT.supabase.co'; // from Supabase
const supabaseKey = 'YOUR-ANON-PUBLIC-KEY';             // from Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
