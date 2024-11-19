// import crypto from 'node:crypto';
import jwt from "jsonwebtoken";

// const secret = crypto.randomBytes(32).toString("hex");

const token = jwt.sign({ userId: 'jkjk390'}, process.env.JWT_SECRET_KEY);

// console.log(token)

const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
console.log(decoded);


// import { Resend } from 'resend';

// const resend = new Resend('re_drL3BkHz_MyygFQrCp3cTRJ1GgJfxdAcF');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: "ssonercebeci93@gmail.com",
//   subject: 'Hello World 1',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });