import * as config from '../config/default.json';
import jwt from 'jsonwebtoken';

export const protectFunction = (authorization) => {
  try {
    const user = jwt.verify(authorization, config.secret);
    if (user) {
      return "You are under protected data"
    }
    return null;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
