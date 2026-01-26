import Footer from "./components/Footer";
import GetInspired from "./components/GetInspired";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import ShopByRoom from "./components/ShopByRoom";
import Trending from "./components/Trending";

const App = () => {
  return <div className="min-h-screen overflow-clip">
    {/* header */}
    <Header />
    <hr className="text-zinc-300 -mt-4" />
    {/* main */}
    <main>
      <Hero />
      <hr className="text-zinc-300" />
      <Trending />
      <hr className="text-zinc-300" />
      <NewArrival />
      <hr className="text-zinc-300" />
      <ShopByRoom />
      <hr className="text-zinc-300" />
      <GetInspired />
    </main>
    <Footer />
  </div>;
};

export default App;
