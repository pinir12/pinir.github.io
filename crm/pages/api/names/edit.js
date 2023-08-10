import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    function isEmailValid(mail) {
      if (mail.length === 0) {
          return true;
      } else {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/;
      return emailRegex.test(mail);}
    }
    

    const updateId = req.query.update;
    const newData = JSON.parse(req.body);
    const email = newData.email
    
    if (isEmailValid(email)) {


    const { data, error } = await supabase
      .from('names')
      .update({ 
        first_name: newData.firstName, 
        surname: newData.surname,
        address_1: newData.address,
        address_2: newData.city,
        address_4: newData.postcode8,
        phone: newData.phone,
        email: newData.email,
        type: newData.type,
        value: newData.value,
        note: newData.note
    })
      .eq('id', `${updateId}`)
      .select() 
      
      res.status(200).json("data");
    }  else {
      res.status(400).json(`'${email}' is not a valid email address`);
    }
    
  }

    