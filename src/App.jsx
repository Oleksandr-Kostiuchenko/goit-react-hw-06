//* Libraries
import style from "./App.module.css";
import { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";

//* Pages
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AddPage from "./pages/AddPage/AddPage";
import FavPage from "./pages/FavPage/FavPage";

//* Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/fav" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
