import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", height: "100vh" }}>
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        <li><Link to="/clients">Clients</Link></li>
      </ul>
    </div>
  );
}