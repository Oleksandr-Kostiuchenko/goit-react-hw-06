import style from "./AddPage.module.css";
import { useState } from "react";

//* Components
import ContactForm from "../../components/contactform/ContactForm";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const AddPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      <ContactForm />
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default AddPage;
