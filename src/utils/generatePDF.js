import jsPDF from "jspdf";

export function generatePDF(invoice) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Invoice", 20, 20);

  doc.setFontSize(12);
  doc.text(`Client: ${invoice.client}`, 20, 40);
  doc.text(`Amount: ₹${invoice.amount}`, 20, 50);
  doc.text(`Date: ${invoice.date}`, 20, 60);

  doc.save("invoice.pdf");
}