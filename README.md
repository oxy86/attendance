This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It uses Prisma and Fastify. Needs Postgres on your server. The DB schema in defined in prisma/schema.prisma. 


## Getting Started

To use the app, you should first define some users in the DB using Prisma Studio. To start Prisma Studio use:

```bash 
npx prisma studio 
```

Prisma Studio will run on http://localhost:5555. 

Open the Prisma Studio page, and select the User model to create a database user with an ADMIN role and some users with an EMPLOYEE role. 
To do that click on Add record, then fill in the required fields. Once you are done, click on the green Save button. 


## Run the app

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


