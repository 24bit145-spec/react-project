export default function InvoiceCard({ invoice }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>Invoice #{invoice.id}</h4>
      <p>Amount: ₹{invoice.amount}</p>
    </div>
  );
}