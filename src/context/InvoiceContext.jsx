import { createContext, useState, useEffect } from "react";

const InvoiceContext = createContext();

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(() => {
    const data = localStorage.getItem("invoices");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const addInvoice = (invoice) => {
    setInvoices((prev) => [...prev, invoice]);
  };
  const deleteInvoice = (id) => {
  setInvoices((prev) => prev.filter((inv) => inv.id !== id));
};

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, deleteInvoice }}>
      {children}
    </InvoiceContext.Provider>

  );
};

export { InvoiceContext };
export default InvoiceProvider;