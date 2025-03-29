import { useEffect, useState } from "react";
import style from "./Contact.module.css";

import { motion } from "framer-motion";

const randomColorsArr = [
  "#A3C4BC",
  "#C3B299",
  "#D4A5A5",
  "#A5A5D4",
  "#D4C5A5",
  "#A5D4C5",
  "#C5A5D4",
  "#D4A5C5",
  "#A5D4A5",
  "#C5D4A5",
];

const Contact = ({ contactData, onDelete }) => {
  const name = contactData.name.split(" ");
  const firstName = name[0];
  const secondName = name[1];

  const [randomColor, setRandomColor] = useState(
    randomColorsArr[Math.ceil(Math.random(0, randomColorsArr.length - 1) * 10)]
  );

  useEffect(() => {
    localStorage.setItem(`${contactData.id}`, randomColor);
  }, []);

  return (
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
          style={{ backgroundColor: randomColor }}
        >
          {firstName[0]}
          {secondName !== undefined && secondName[0]}
        </div>
        <div className={style.nameWrapper}>
          <p className={style.personName}>{contactData.name}</p>
          <a className={style.personNumber} href={`tel:${contactData.number}`}>
            {contactData.number}
          </a>
        </div>
      </div>

      <button className={style.deleteBtn} onClick={() => onDelete(contactData)}>
        Delete
      </button>
    </motion.div>
  );
};

export default Contact;
