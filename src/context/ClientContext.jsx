import { createContext, useState, useEffect } from "react";

export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState(() => {
    const data = localStorage.getItem("clients");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const addClient = (client) => {
    setClients((prev) => [...prev, client]);
  };

  const deleteClient = (id) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ClientContext.Provider value={{ clients, addClient, deleteClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;