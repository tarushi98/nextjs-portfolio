
export default async(req, res) => {
        const email = JSON.parse(req.body).email;
        const API_KEY = process.env.SUBSCRIBERS_API;
        if(!email)
        {       
                return res.status(400).json({error:"❌ Email Not Entered"});
        }
        try{
                console.log("Fetching Response");
                const sub_result = await fetch(
                        'https://api.buttondown.email/v1/subscribers',
                         {
                                 method:"POST",
                                 body:JSON.stringify({email}),
                                 headers:{
                                        Authorization: `Token ${API_KEY}`,
                                        'Content-Type': 'application/json'
                                }

                         }
                );
                if(sub_result.status>=400)
                {
                        return res.status(400).json({error:"😔 Hey ! Are you already a part of the Fam? If not please check your ID!"});
                }

                return res.status(200).json({error:"Welcome to the Fam! 🥂"});
        }
        catch(error)
        {
                return res.status(500).json({ error: error.message || error.toString() });
        }
      
        
};
