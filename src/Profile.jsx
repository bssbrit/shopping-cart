import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="../app">App page</Link>
        </li>
        <li>
          <Link to="./spinach">Spinach page</Link>
        </li>
        <li>
          <Link to="./popeye">Pop Eye page</Link>
        </li>
      </ul>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <Outlet />
    </div>
  );
};

export default Profile;
