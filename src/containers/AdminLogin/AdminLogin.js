import React, { useState, useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase";

function AdminLogin({ history }) {
  const [user, setuser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email.trim(), password);
      history.push("/admin/login");
    } catch (error) {
      console.log(email);
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser);
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
          type="email"
          name="email"
          placeholder="Username"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="Password"
          name="name"
          placeholder="Password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default withRouter(AdminLogin);
