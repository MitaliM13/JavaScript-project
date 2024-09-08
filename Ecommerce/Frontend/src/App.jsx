import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Special from './components/Special';

function App() {
  

  return (
      <div className="relative w-full h-2/4 overflow-hidden">
        <Header />
        <Hero />
        <Special />
        <Products />
      </div>
  );
}

export default App;
