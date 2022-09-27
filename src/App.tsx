import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="App">
     <Header></Header>
     <main>
     <Routes>
     <Route index element={<Navigate to='/home' />} />
     <Route path='/home' element={<MainPage />} />
     {/* <Route path='/home/:itemId' element={<SinglePost />} /> */}
     {/* <Route path='*' element={<PageNotFound />} /> */}
     </Routes>
     </main>
    
    </div>
  );
}

export default App;
