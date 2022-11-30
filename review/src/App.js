import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Navbar from './User/Navbar';
import Layout from './User/Layout';
import AddUser from './User/AddUser';
import ViewUser from './User/ViewUser';
import EditUser from './User/EditUser';





function App() {
  return (
    <div className="App">
      
         <Router>
          <Navbar/>
        
          
          <Header/>
          
          
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/login" element={<Layout/>} />
                <Route path="/viewuser/:id" element={<ViewUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />

            </Routes>
        </Router>
         
    </div>
  );
}

export default App;
