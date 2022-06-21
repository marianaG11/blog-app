import Create from './Create';
import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import {Route, Routes} from "react-router-dom";
function App() {
  const title ="welcome";
  return (
    <Routes>
      <Route path="/" element={<Home /> }
      />
      <Route path="/create" element={<Create />}
      />
      <Route path="/blogs/:id" element={<BlogDetails />}
      />
    </Routes>
  );
}

export default App;
 