import { PrismaClient } from '@prisma/client'
import { withIronSessionApiRoute } from "iron-session/next";
import { parseBody } from '../../lib/parseBody';
import { sessionCookie } from '../../lib/session';


// This route handles the login POST request towards localhost:3000/api/login, 
// Generates authentication cookies once the user is authenticated.

// PrismaClient to make our database queries
// withIronSessionApiRoute is the iron-session function for handling user sessions in RESTful applications.
export default withIronSessionApiRoute(
    async function loginRoute(req, res) {

      const { email, password } = parseBody(req.body)

      const prisma = new PrismaClient()

      // By unique identifier
      const user = await prisma.user.findUnique({
        where: {
        email
      },})

      if(user.password === password) {

        // get user from database then:
        user.password = undefined
        req.session.user = user
        await req.session.save();

        return res.send({ status: 'success', data: user });

      };


    res.send({ status: 'error', message: "incorrect email or password" });

  },
  sessionCookie(),
);


