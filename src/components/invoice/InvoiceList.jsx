import { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

export default function InvoiceList() {
  const { invoices, deleteInvoice } = useContext(InvoiceContext);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">Invoices</h2>

      {invoices.length === 0 ? (
        <p>No invoices created</p>
      ) : (
        <div className="grid gap-3">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <span>Invoice #{inv.id}</span>

              <div className="flex gap-3">
                <span className="text-green-500 font-bold">
                  ₹{inv.amount}
                </span>

                <button
                  onClick={() => deleteInvoice(inv.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}