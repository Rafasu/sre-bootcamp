import  db  from '../database/db';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import * as config from "../config/default.json";

export const loginFunction = async (username, password) => { 
  try{
    if(!username || !password){
      return "Plase insert an username and a pasword";
    }
    const results = await db.query(
      "SELECT * FROM `users` WHERE username = ?", [ username ]
    );
    const resultObj = results[0];
    const encPassword = crypto.createHash('sha512').update(password + resultObj.salt).digest('hex');  
    if(!encPassword.localeCompare(resultObj.password)){
    const token = jwt.sign(
      {role: resultObj.role,
      },config.secret,{
      noTimestamp: true,}); 
    return token;
    } 
    return "No user found";

  }catch(err){
    console.error(err.message);
  }
}