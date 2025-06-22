import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const user = useSelector((store) => store);

  if (!user.token) {
    return <Navigate to="/" />;
  } else {
    return element;
  }
}
export default PrivateRoute;
