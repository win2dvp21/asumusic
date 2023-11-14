import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main';
import Create from './pages/create';
import Detail from './pages/detail';
import Headerbar from './pages/headerbar';

function App() {
  return (
    <BrowserRouter>
      <Headerbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/create/*" element={<Create />}></Route>
        <Route path="/detail/*" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
