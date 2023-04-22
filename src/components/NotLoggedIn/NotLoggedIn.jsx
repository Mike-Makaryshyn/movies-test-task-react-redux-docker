import { Link } from "react-router-dom";

const NotLoggedIn = () => {

   return (
      <div className="mt-10">
      You are not logged in!
      <Link to='/login' className="my-link ml-2">
        Go to Login page
      </Link>
    </div>
   )
}

export default NotLoggedIn;