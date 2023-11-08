import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main';
import Create from './pages/create';
import Detail from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="/create/*" element={<Create />}></Route>
        <Route path="/detail/*" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
