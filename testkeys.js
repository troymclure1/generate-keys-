const jwt2 = require('jsonwebtoken');
const fs = require('fs');
const publicKey = fs.readFileSync('public.pem');
const privateKey = fs.readFileSync('private.pem');

var token = jwt2.sign({ user: 'sean' }, privateKey, { algorithm: 'RS256' });

var res = jwt2.verify(token, publicKey, { algorithm: 'RS256' });
console.log(res);
