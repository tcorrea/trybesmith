import jwt from 'jsonwebtoken';

require('dotenv/config');

const createToken = (payload: object) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!);
  return token;
};

export default createToken;
