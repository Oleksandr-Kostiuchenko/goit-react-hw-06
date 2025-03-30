//* Libraries
import style from "./FavPage.module.css";
import { useState, useEffect, useId } from "react";
import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

//* Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import FavList from "../../components/favcontactlist/FavList";

const FavPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      <FavList />
    </>
  );
};

export default FavPage;
