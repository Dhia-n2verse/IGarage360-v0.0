import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pewxqoekelazouabsehv.supabase.co"
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBld3hxb2VrZWxhem91YWJzZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NTI1OTIsImV4cCI6MjA1OTQyODU5Mn0.0dP10kVG0WDad0o4xzRkoWzVm6SeYnB6oUcEkNvy9zU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
