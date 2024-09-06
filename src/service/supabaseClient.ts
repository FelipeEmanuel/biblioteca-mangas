// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Detalhes obtidos no painel do Supabase
const supabaseUrl = 'https://erqclwlszshxuvlqmyqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVycWNsd2xzenNoeHV2bHFteXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1ODgxODUsImV4cCI6MjA0MTE2NDE4NX0.EYaVWLJ0yTe2FYZPb93z4OwAhlAmedjLY5SC9A0LY7Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
