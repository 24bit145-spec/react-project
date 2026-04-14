import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { ClientContext } from "../context/ClientContext";
import Navbar from "../components/common/Navbar";

export default function Dashboard() {
  const { invoices } = useContext(InvoiceContext);
  const { clients } = useContext(ClientContext);

  // 🔥 total invoices count
  const totalInvoices = invoices.length;

  // 🔥 total clients count
  const totalClients = clients.length;

  // 🔥 total revenue calculate
  const totalRevenue = invoices.reduce(
    (sum, inv) => sum + Number(inv.amount),
    0
  );

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-6">

          {/* Invoices */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Total Invoices</h2>
            <p className="text-2xl font-bold text-green-500">
              {totalInvoices}
            </p>
          </div>

          {/* Clients */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Total Clients</h2>
            <p className="text-2xl font-bold text-blue-500">
              {totalClients}
            </p>
          </div>

          {/* Revenue */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-2xl font-bold text-purple-500">
              ₹{totalRevenue}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}