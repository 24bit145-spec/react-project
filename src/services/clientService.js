import api from "./api";

// get all clients
export const getClients = async () => {
  const res = await api.get("/clients");
  return res.data;
};

// create client
export const createClient = async (data) => {
  const res = await api.post("/clients", data);
  return res.data;
};

// delete client
export const deleteClient = async (id) => {
  const res = await api.delete(`/clients/${id}`);
  return res.data;
};