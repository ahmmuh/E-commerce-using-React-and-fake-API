import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
