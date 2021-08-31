import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
 
  const jwtoken = await loginFunction(username, password);
  let response = {
    "data": jwtoken
  };
  res.send(response);
  next();
}
