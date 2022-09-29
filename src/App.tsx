import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { SignIn } from "./pages/SignInPage";
import { MainPage } from "./pages/MainPage";
import { PageNotFound } from "./pages/PageNotFound";
import { SignUp } from "./pages/SignUpPage";
import { SinglePost } from "./pages/SinglePost";
import { User } from "./types";
import { Profile } from "./pages/Profile";



function App() {
  const [currentUser, setCurrentUser]=useState<User| null>(null)

  let navigate= useNavigate()

  function signInUser(data: any){
    setCurrentUser(data.user)
    localStorage.token=data.token
    navigate('/home')
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
     <Route path='/profile' element={<Profile currentUser={currentUser} />} />
     <Route path='/home/:itemId' element={<SinglePost currentUser={currentUser}/>} />
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     </section>
    
    </div>
  );
}

export default App;
