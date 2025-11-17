import logo from './logo.svg';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
