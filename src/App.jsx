import { useState, useEffect, useId } from "react";
import style from "./App.module.css";

import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";

import ContactList from "./components/contactlist/ContactList";
import SearchBox from "./components/searchbox/SearchBox";
import ContactForm from "./components/contactform/ContactForm";

import { motion } from "framer-motion";

import toast, { Toaster } from "react-hot-toast";

const contactsArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsDataFromLS = JSON.parse(localStorage.getItem("contactsList"));

    if (contactsDataFromLS !== null) {
      return contactsDataFromLS;
    }

    return contactsArr;
  });

  const [searchBoxValue, setSearchBoxValue] = useState("");

  const visibleContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(searchBoxValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    notifySuccessAdd(newContact.name);
  };

  const deleteContact = (contact) => {
    setContacts((prevContacts) =>
      prevContacts.filter((el) => el.id !== contact.id)
    );
    notifySuccessRemoove(contact.name);
  };

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  const notifySuccessAdd = (personName) =>
    toast.success(`${personName} is successfully added!`);

  const notifySuccessRemoove = (personName) =>
    toast.success(`${personName} is successfully deleted!`, {
      icon: "❌",
    });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
      <SearchBox
        searchBoxValue={searchBoxValue}
        setSearchBoxValue={setSearchBoxValue}
      />
      <ContactForm onAdd={addContact} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
