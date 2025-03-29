import style from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";

import { motion } from "framer-motion";

const SearchBox = ({ searchBoxValue, setSearchBoxValue }) => {
  const onSearchBoxChange = (event) => {
    setSearchBoxValue(event.target.value);
  };

  return (
    <motion.div
      className={style.SearchBoxWrapper}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CiSearch className={style.searchIcon} />
      <input
        placeholder="Search"
        className={style.contactInput}
        value={searchBoxValue}
        onChange={onSearchBoxChange}
        type="text"
      />
    </motion.div>
  );
};

export default SearchBox;
