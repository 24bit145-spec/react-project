import Navbar from "../components/common/Navbar";
import ClientForm from "../components/client/ClientForm";
import ClientList from "../components/client/ClientList";

export default function Clients() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Clients</h1>
        <ClientForm />
        <ClientList />
      </div>
    </>
  );
}