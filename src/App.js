import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useTheme } from './hooks/useTheme';

import Home from './pages/home/Home';
import Pokemon from './pages/pokemon/Pokemon';
import Search from './pages/search/Search';

import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

import './App.css';

function App() {

  const { mode } = useTheme()

  return (
    <div className={ `App ${ mode }` }>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;