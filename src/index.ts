import dotenv from 'dotenv';

dotenv.config({ path: `.env.example` });
console.log(process.env.PROJECT_NAME);
console.log(process.env.MAINTAINER);
console.log(process.env.NODE_ENV);
