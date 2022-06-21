import Create from './Create';
import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import {Route, Routes} from "react-router-dom";
import NotFound from './NotFound';
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
      <Route path="/*" element={<NotFound />}>
        
      </Route>
    </Routes>
  );
}

export default App;
 