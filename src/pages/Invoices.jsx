import Navbar from "../components/common/Navbar";
import InvoiceForm from "../components/invoice/InvoiceForm";
import InvoiceList from "../components/invoice/InvoiceList";

export default function Invoices() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Invoices</h1>
        <InvoiceForm />
        <InvoiceList />
      </div>
    </>
  );
}