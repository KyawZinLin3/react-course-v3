import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const Login = () => {
    setUser({ name: "Vegan Food truck" });
  };
  const LogOut = () => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <h4>Hello There : {user.name}</h4>
          <button className="btn" type="button" onClick={LogOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h4></h4>
          <button className="btn" type="button" onClick={Login}>
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
