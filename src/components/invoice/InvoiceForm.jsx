import { useState, useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

export default function InvoiceForm() {
  const [amount, setAmount] = useState("");
  const { addInvoice } = useContext(InvoiceContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInvoice = {
      id: Date.now(),
      amount,
    };

    addInvoice(newInvoice);
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Create Invoice</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
          Create Invoice
        </button>
      </form>
    </div>
  );
}