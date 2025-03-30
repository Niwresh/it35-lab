import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient('https://hjwglnsfanmjrcrwwymq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqd2dsbnNmYW5tanJjcnd3eW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMjU0MjAsImV4cCI6MjA1ODcwMTQyMH0.rE4D9PzIYganewz5sdEXB4hgp6tcR6O56zUHnhl5B9c');