import { User, Session }  from './db.js';
import validate from 'uuid-validate';

export default async function authentication(req, res, next){
    if (await isAuthenticated(req)) next();
    else res.status(401).send();
}

async function isAuthenticated(req){
    const token = req.headers.authentication;
    const authenticatedUser = await getUserByToken(token);
    return authenticatedUser!=null;
   
}

async function getUserByToken(token){
    if (validate(token)){
        const foundSession = await Session.findOne({where: { token: token }});
        if (foundSession) return await User.findByPk(foundSession.userId);
        else return null;
    }else return null;
}