import Create from './Create';
import Navbar from './Navbar';
import Home from './Home';
import {Route, Routes} from "react-router-dom";
function App() {
  const title ="welcome";
  return (
    <Routes>
      <Route path="/" element={<Home /> }
      />
      <Route path="/create" element={<Create />}
      />
    </Routes>
  );
}

export default App;
 