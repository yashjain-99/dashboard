import DashboardWrapper from "./components/DashboardWrapper";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="grid grid-cols-[auto_1fr] min-h-screen bg-background text-primary">
      <Sidebar />
      <DashboardWrapper />
    </main>
  );
}

export default App;
