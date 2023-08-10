import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

   const from = req.query.from;
   const to = req.query.to;




   if (req.query.datatype) {
    const type = req.query.datatype;
    if (type == 'teams') {
    const { data, error } = await supabase
    .from('names')
    .select('*')
    .eq('type', "Team")
    .range(`${from}`,`${to}`)
    .order('created_at', { ascending: false })
    res.status(200).json(data);
    } else if (type == 'donors') {
        const { data, error } = await supabase
        .from('names')
        .select('*')
        .eq('type', "Donor")
        .range(`${from}`,`${to}`)
        .order('created_at', { ascending: false })
        res.status(200).json(data);
    }
}



    let { data: names, error } = await supabase
        .from('names')
        .select('*')
        .range(`${from}`,`${to}`)
        .order('created_at', { ascending: false })
        

    res.status(200).json(names);
    
    
}