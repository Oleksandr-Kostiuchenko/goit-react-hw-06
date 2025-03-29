//* Libraries
import style from "./App.module.css";
import { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";

//* Components
import ContactList from "./components/contactlist/ContactList";
import SearchBox from "./components/searchbox/SearchBox";
import ContactForm from "./components/contactform/ContactForm";

function App() {
  return (
    <>
      <motion.div
        className={style.pageHeader}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={style.iconWrapper}>
          <MdAccountCircle className={style.icon} />
        </div>
        <h1 className={style.pageTitle}>Contacts</h1>
      </motion.div>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </>
  );
}

export default App;
