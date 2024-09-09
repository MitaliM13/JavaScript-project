import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Special from './components/Special';
import Footer from './components/Footer';

function App() {
  

  return (
      <div className="relative w-full h-2/4 overflow-hidden">
        <Header />
        <Hero />
        <Special />
        <Products />
        <Footer />
      </div>
  );
}

export default App;
