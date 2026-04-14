import api from "./api";

// get all invoices
export const getInvoices = async () => {
  const res = await api.get("/invoices");
  return res.data;
};

// create invoice
export const createInvoice = async (data) => {
  const res = await api.post("/invoices", data);
  return res.data;
};

// update invoice
export const updateInvoice = async (id, data) => {
  const res = await api.put(`/invoices/${id}`, data);
  return res.data;
};

// delete invoice
export const deleteInvoice = async (id) => {
  const res = await api.delete(`/invoices/${id}`);
  return res.data;
};