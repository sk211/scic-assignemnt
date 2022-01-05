import { useContext } from "react";
<<<<<<< HEAD
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;
=======
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
>>>>>>> acccfdb445f9f8699c4673302598ddd7a365d6ad
