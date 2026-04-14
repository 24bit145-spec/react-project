export default function InvoicePDF() {
  const handleDownload = () => {
    alert("PDF Download (add jsPDF later)");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}