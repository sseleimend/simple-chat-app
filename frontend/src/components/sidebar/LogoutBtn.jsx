import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout.js";

export const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <button onClick={logout} className="mt-auto">
      {!loading ? (
        <BiLogOut className="size-6 text-white cursor-pointer" />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};
