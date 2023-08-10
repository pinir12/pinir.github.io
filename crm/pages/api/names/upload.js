import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const data = JSON.parse(req.body);
    const records = [];
    for (const record of data.data.validData) {
      records.push({
        first_name: record.first_name,
        surname: record.surname,
        address_1: record.address,
        address_2: record.city,
        address_4: record.recordcode,
        phone: record.phone,
        email: record.email,
        type: record.type,
        value: record.value,
        note: record.notes
      });
    }
    
   
    
   

   

        
    const { name, error } = await supabase
    .from('names')
    .insert(records)
    .select()
    res.status(200).json(`Successfully added contacts from upload sheet`);
 
  
 
}