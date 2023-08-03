import './App.scss';
import Store from './components/Store/Store';
import products from './data/products.json';

function App() {
  return (
    <Store products={products} />
  );
}

export default App;
