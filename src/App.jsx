import AppRoutes from "./routes/AppRoutes";

// Context Providers (optional if already in main.jsx)
import AuthProvider from "./context/AuthContext";
import InvoiceProvider from "./context/InvoiceContext";
import ClientProvider from "./context/ClientContext";

export default function App() {
  return (
    <AuthProvider>
      <InvoiceProvider>
        <ClientProvider>
          <AppRoutes />
        </ClientProvider>
      </InvoiceProvider>
    </AuthProvider>
  );
}