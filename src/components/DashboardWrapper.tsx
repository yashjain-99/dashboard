import Dashboard from "./Dashboard";
import Header from "./Header";

const DashboardWrapper = () => {
  return (
    <section className="grid grid-rows-[auto_1fr]">
      <Header />
      <Dashboard />
    </section>
  );
};

export default DashboardWrapper;
