//* Libraries
import style from "./Contact.module.css";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

//* Redux
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactData, notifySuccessRemoove }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contactData.id));
    notifySuccessRemoove(contactData.name);
  };

  const name = contactData.name.split(" ");
  const firstName = name[0];
  const secondName = name[1];

  return (
    <>
      <motion.div
        className={style.contactWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className={style.personInfoWrapper}>
          <div
            className={style.personAvatar}
            style={{ backgroundColor: contactData.color }}
          >
            {firstName[0]}
            {secondName !== undefined && secondName[0]}
          </div>
          <div className={style.nameWrapper}>
            <p className={style.personName}>{contactData.name}</p>
            <a
              className={style.personNumber}
              href={`tel:${contactData.number}`}
            >
              {contactData.number}
            </a>
          </div>
        </div>

        <button className={style.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </motion.div>
    </>
  );
};

export default Contact;
