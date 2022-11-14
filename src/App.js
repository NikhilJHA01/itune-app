import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoData from "./components/NoData";
const Home = React.lazy(() => import("./pages/Home"));
const Favourites = React.lazy(() => import("./pages/Favourites"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<NoData>Loading...</NoData>}>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/favourites" element={<Favourites />} exact></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
