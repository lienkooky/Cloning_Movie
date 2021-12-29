import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
