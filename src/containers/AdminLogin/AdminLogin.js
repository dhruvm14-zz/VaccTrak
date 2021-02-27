import React, { useState, useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase";

function AdminLogin({ history }) {
  const [user, setuser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      console.log(email);
      try {
        await auth.signInWithEmailAndPassword(email.trim(), password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="AdminLogin">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        className="hospital__form"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          name="email"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default withRouter(AdminLogin);
