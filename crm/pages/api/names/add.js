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
    
    const post = JSON.parse(req.body);
    const email = post.email

    if (isEmailValid(email)) {

        
    const { name, error } = await supabase
    .from('names')
    .insert([
      { first_name: post.firstName, 
        surname: post.surname,
        address_1: post.address,
        address_2: post.city,
        address_4: post.postcode,
        phone: post.phone,
        email: post.email,
        type: post.type,
        value: post.value,
        note: post.note
     },
    ])
    .select()
    res.status(200).json(`Successfully added contact`);
  } else {
    res.status(400).json(`'${email}' is not a valid email address`);
  }
  
}