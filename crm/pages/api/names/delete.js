import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);



    


 
    const id = req.query.id;
const { error } = await supabase
.from('names')
.delete()
.eq('id', id)
res.status(200).json(`Successfully deleted contact ID: ${id}`);

}