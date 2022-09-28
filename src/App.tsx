import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { SignIn } from "./pages/SignInPage";
import { MainPage } from "./pages/MainPage";
import { PageNotFound } from "./pages/PageNotFound";
import { SignUp } from "./pages/SignUpPage";


function App() {
  const [currentUser, setCurrentUser]=useState(null)

  let navigate= useNavigate()

  function signInUser(data: any){
    setCurrentUser(data.user)
    localStorage.token=data.token
    navigate("/home")
  }

  function signOutUser(){
    setCurrentUser(null)
    localStorage.removeItem('token')
    navigate("/signIn")
  }
   
  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:5126/validate`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signInUser(data);
          }
        })
        
    }
  }, []);

  return (
    <div className="App">
     <Header currentUser={currentUser} signOutUser={signOutUser}></Header>
     <section>
     <Routes>
     <Route index element={<Navigate to='/home' />} />
     <Route path='/home' element={<MainPage currentUser={currentUser}/>} />
     <Route path='/signIn' element={<SignIn signInUser={signInUser}/>} />
     <Route path='/signUp' element={<SignUp signInUser={signInUser} />} />
     {/* <Route path='/home/:itemId' element={<SinglePost />} /> */}
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     </section>
    
    </div>
  );
}

export default App;
