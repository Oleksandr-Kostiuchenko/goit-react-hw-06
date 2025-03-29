import { AnimatePresence, motion } from "framer-motion";
import style from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul className={style.contactsList}>
      <AnimatePresence mode="popLayout">
        {contactsData.map((el) => (
          <motion.li
            className={style.taskWrapper}
            key={el.id}
            layout
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Contact contactData={el} onDelete={onDelete} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ContactList;
