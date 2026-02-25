import Nav from "./nav";
import Employees from "./employees";
import Client from "./client";
import Footer from "./footer";

export default function App() {
  return (
    <div className="min-h-screen min-w-[320px] bg-[#242424] text-white/87 font-sans antialiased">
      <Nav />
      <main>
        <Employees />
        <Client />
      </main>
      <Footer />
    </div>
  );
}
