import React, { useState } from "react";

function Login({ setUsername }) {
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      localStorage.setItem("username", input.trim());
      setUsername(input.trim());
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;