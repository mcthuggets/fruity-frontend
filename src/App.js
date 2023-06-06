import React from "react"
import  {
        BrowserRouter,
        Routes,
        Route,
        AuthorizeRoute,
        Link
        } from 'react-router-dom'
//pages
import Login from "./Pages/Login";
import Survey from "./Pages/Survey";
import Fruits from "./Pages/Fruits";
import DownloadSurveys from "./Pages/DownloadSurveys";

function App() {
  return (
    <>
       <BrowserRouter>

            <div className="nav">
              <button className="auth-button"> Sign in </button>
              <Link to="/Fruits" className="auth-button"> Fruits </Link>
              <Link to="/Survey" className="auth-button"> Survey </Link>
              <Link to="/DownloadSurveys" className="auth-button"> Download Surveys </Link>
            </div>

            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Fruits"> Fruits </Link>
              </li>
              <li>
                <Link to="/Survey"> Survey </Link>
              </li>
              <li>
                <Link to="/DownloadSurveys"> Download Surveys </Link>
              </li>
            </ul>

           <Routes>
                 <Route exact path='/' element={<Login />}></Route>
                 <Route exact path='/Fruits' element={<Fruits />}></Route>
                 <Route exact path='/Survey' element={<Survey />}></Route>
                 <Route exact path='/DownloadSurveys' element={<DownloadSurveys />}></Route>
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
