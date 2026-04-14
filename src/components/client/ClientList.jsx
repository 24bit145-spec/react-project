import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export default function ClientList() {
  const { clients, deleteClient } = useContext(ClientContext);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">Clients</h2>

      {clients.length === 0 ? (
        <p>No clients added</p>
      ) : (
        <div className="grid gap-3">
          {clients.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <span>{c.name}</span>

              <button
                onClick={() => deleteClient(c.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}