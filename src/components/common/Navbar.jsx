import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">InvoicePro</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-green-400">Dashboard</a>
        <a href="/invoices" className="hover:text-green-400">Invoices</a>
        <a href="/clients" className="hover:text-green-400">Clients</a>
      </div>
    </nav>
  );
}