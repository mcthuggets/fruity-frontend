import React, { useState, useEffect} from "react"
import  {
        BrowserRouter,
        Routes,
        Route,
        AuthorizeRoute,
        Link,
        redirect
        } from 'react-router-dom'
//pages
import Login from "./Pages/Login";
import Survey from "./Pages/Survey";
import Fruits from "./Pages/Fruits";
import DownloadSurveys from "./Pages/DownloadSurveys";

function App() {

  const [isAuth, setIsAuth] = useState(true)

  const [authToken, setAuthToken] = useState(null)

  const onLogIn = (authToken) => {
    setAuthToken(authToken)
    setIsAuth(true)
    }

  return (
    <>
       <BrowserRouter>

           <div className="nav">
              { isAuth ? <Link to="/login" className="auth-button" onClick={ () => setIsAuth(!isAuth)}> Log out </Link> : <Link to="/login" className="auth-button" onClick={ () => setIsAuth(!isAuth)}> Log In </Link> }
              <Link to="/Fruits" className="auth-button"> Fruits </Link>
              <Link to="/Survey" className="auth-button"> Survey </Link>
              <Link to="/DownloadSurveys" className="auth-button"> Download Surveys </Link>
            </div>

           <Routes>
                 <Route exact path='/login' element={<Login authHandler={ onLogIn } /> } > </Route>
                 <Route exact path='/Fruits' element={<Fruits />}> </Route>
                 <Route exact path='/Survey' element={<Survey />}> </Route>
                 <Route exact path='/DownloadSurveys' element={<DownloadSurveys />}></Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
