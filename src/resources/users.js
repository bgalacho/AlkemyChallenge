import { User, Session } from '../db.js';


export async function loginAuthUser (req,res) {
    if(!req.body.email || !req.body.password){
        res.status(400);
        res.send('Invalid details!');
     }else {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
              email: email,
              password: password
            },
          });
          if (user == null) {
            res.status(404).send('Invalid user')
          }else {
            
            const session = await Session.create({
                userId: user.id,
            });
            res.status(200).send(session)
          }        
     }
  };
  export async function registerUser (req,res) {
   const {  firstName,
            lastName,
            password,
            email,  
         } = req.body
            const newUser = await User.create({
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
              });
        res.status(200).send(newUser);
       
  }



