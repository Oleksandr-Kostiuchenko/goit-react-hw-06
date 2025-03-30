//* Libraries
import style from "./ContactsPage.module.css";
import { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

//* Components
import ContactList from "../../components/contactlist/ContactList";
import SearchBox from "../../components/searchbox/SearchBox";
import AlphabetFilter from "../../components/alphabetFilter/AlphabetFilter";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

//* Redux
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const contactsData = useSelector((state) => state.contacts.items);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      <SearchBox />
      <div className={style.contactsWrapper}>
        {contactsData.length > 1 && <AlphabetFilter />}
        <ContactList />
      </div>
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default ContactsPage;
