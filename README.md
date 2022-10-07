This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It uses [Prisma](https://www.npmjs.com/package/prisma) to manage db connectivity and [Fastify](https://www.npmjs.com/package/fastify) as server. 
Sessions are handled by [iron-session](https://www.npmjs.com/package/iron-session?activeTab=readme) iron-session. 
Note: You need to have PostgreSQL installed on your server/machine.


## Before running the app

Step 1. 

Create a db and a user in your local Postgres installation. Connect to postgres:

```bash
sudo -u postgres psql
```

Then create then new db and a user with privileges on it (change the YOUR_DB_ to your own):

```bash
CREATE DATABASE YOUR_DB_NAME;

CREATE USER YOUR_DB_USER WITH ENCRYPTED PASSWORD 'YOUR_DB_PASSWORD';

GRANT ALL PRIVILEGES ON DATABASE YOUR_DB_NAME TO YOUR_DB_USER;

\c YOUR_DB_NAME

```

The db is empty. Tables will be created on Step 3. Issue quit to exit the postgres terminal.


Step 2. 

Then, create a file .env inside the project root with contents like these:

```bash
# Your database URL with your own db name, db user and her password:
DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:5432/YOUR_DB_NAME?schema=public"
# This is used by iron-session (see lib/session.js). It should be a string of at least 32 characters.
SESSION_PASSWORD=YOUSESSIONPASSWORDHERE1234567890USESOMETHINGRANDOMPLEASE
```

Step 3. 

The DB schema (the tables of the database) are already defined in the file prisma/schema.prisma. 
To actually create these tables in the Postgres db, run the following command:

```bash
npx prisma db push
```

Step 4

Finally, you need to define some users in the DB using Prisma Studio. To start Prisma Studio use:

```bash 
npx prisma studio 
```

Prisma Studio will run on http://localhost:5555. 

Open the Prisma Studio page, and select the User model to create a database user with an ADMIN role and some users with an EMPLOYEE role. 
To do that click on Add record, then fill in the required fields. Once you are done, click on the green Save button. 


## Run the app

Now you are ready to run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running. You should be able to login using the credentials you defined in Step 4.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


