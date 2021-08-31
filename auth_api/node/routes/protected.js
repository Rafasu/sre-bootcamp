import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authHeader;
  let authorization = req.headers.authorization;
  if (authorization.startsWith("Bearer ")){
    authHeader = authorization.substr(7);
  }else {
    console.log("Missing Bearer Token");
  }
  const msg = protectFunction(authHeader);
  if (msg) {
    res.status(200).send({"data": msg});
  } else {
    res.status(403).send({"data": "You are not allowed access"})
  }
  next();
}
