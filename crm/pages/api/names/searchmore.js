import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const searchValue = req.query.search;
    const from = req.query.from;
   const to = req.query.to;
   
    const { data, error } = await supabase
    .from('names')
    .select('*')
    .or(`first_name.ilike.%${searchValue}%,surname.ilike.%${searchValue}%`)  
    .range(`${from}`,`${to}`)
    .order('created_at', { ascending: false })
    
    
    res.status(200).json(data);
}