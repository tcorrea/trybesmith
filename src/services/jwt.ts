import jwt from 'jsonwebtoken';

require('dotenv/config');

const createToken = (payload: object) => {
  const token = jwt.sign(payload, 'secret');
  return token;
};

export default createToken;
