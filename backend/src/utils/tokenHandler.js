require('dotenv/config');
const Jwt = require('jsonwebtoken');

const jwtHandler = {
  create: async (payload) =>
    new Promise((resolve, reject) => {
      const token = Jwt.sign(payload, process.env.JWT_SECRET);

      resolve(token);
      reject();
    }),
  verify: async (token) =>
    new Promise((resolve, reject) => {
      const payload = Jwt.verify(token, process.env.JWT_SECRET, {});

      resolve(payload);
      reject();
    }),
  decode: async (token) =>
    new Promise((resolve, reject) => {
      const decodeToken = Jwt.decode(token);

      resolve(decodeToken);
      reject();
    }),
};

module.exports = jwtHandler;
