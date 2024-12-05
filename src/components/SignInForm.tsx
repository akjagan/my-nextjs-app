import React, { useState } from "react";
import axios from "../utils/apiClient";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signin", { email, password });
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Sign-in failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-8 rounded-md">
      <h1 className="mb-6 font-bold text-2xl">Sign In</h1>
      {message && <p>{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-4 p-2 border rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mb-4 p-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
