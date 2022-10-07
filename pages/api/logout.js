import { withIronSessionApiRoute } from "iron-session/next";
import { sessionCookie } from "../../lib/session";


// handles GET requests to localhost:3000/api/logout that logs out users by destroying the session cookies.
export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({ status: "success" });
  },
  sessionCookie()
);

