import { useState, useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export default function ClientForm() {
  const [name, setName] = useState("");
  const { addClient } = useContext(ClientContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: Date.now(),
      name,
    };

    addClient(newClient);
    setName("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Add Client</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
          Add Client
        </button>
      </form>
    </div>
  );
}