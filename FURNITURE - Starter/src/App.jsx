import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return <div className="min-h-screen overflow-clip">
    {/* header */}
    <Header />
    <hr className="text-zinc-300 -mt-4" />
    {/* main */}
    <main>
      <Hero />
      <hr className="text-zinc-300" />
    </main>
    {/* footer */}
  </div>;
};

export default App;
