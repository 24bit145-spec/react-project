import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}