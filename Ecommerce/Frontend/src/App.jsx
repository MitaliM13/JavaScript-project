import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Data from './components/Data';

function App() {
  return (
    <div className="relative w-full h-2/4 overflow-hidden">
      <Header />
      <Hero />
      <Data />
      <Products />
    </div>
  );
}

export default App;
