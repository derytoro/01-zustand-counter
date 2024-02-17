import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "./app-store";
import { useState } from "react";

export default function User() {
  const [user, getUser, logoutUser] = useAppStore(
    useShallow((state) => [state.user, state.getUser, state.logoutUser])
  );

  const [username, setUsername] = useState("");

  return (
    <div>
      <p>Login by username</p>
      <input
        type="text"
        placeholder="New username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={() => getUser(username)}>
        Login
      </button>

      {user.login && (
        <>
          <p>Logged in as {user.login}</p>
          <button type="button" onClick={logoutUser}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
