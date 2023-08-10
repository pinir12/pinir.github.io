import axios from 'axios';

export default async function handler(req, res) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

   
      const response = await axios.get('https://hkrplealfgjbvvmmirqr.supabase.co/rest/v1/names?select=*', {
        headers: {
            'apikey': SUPABASE_KEY,
        },
       
      });
      console.log(response.data);
      res.status(200).json(response.data);
    } 
  


