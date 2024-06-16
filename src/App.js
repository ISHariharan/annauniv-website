import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/Home/Home";
import Sample from './components/Sample/Sample';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />
  },
  {
    path : "/home",
    element : <Home />
  },
  {
    path : "/userhome",
    element : <UserHome />
  },
  {
    path : "/Sample",
    element : <Sample />
  },
  {
    path : "/signup",
    element : <Signup />
  },
  {
    path : "/login",
    element : <Login />
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
