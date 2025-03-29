import style from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { IoPersonAdd } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import { motion } from "framer-motion";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min. 3 symbols")
    .max(50, "Max 50 symbols")
    .required("Required"),
  number: Yup.string()
    .phone("", "Please enter a valid phone number")
    .required("A phone number is required"),
});

const ContactForm = ({ onAdd }) => {
  const onFormSubmit = (formData, actions) => {
    onAdd({
      ...formData,
      id: `${nanoid(16)}`,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      <motion.div
        className={style.pageHeader}
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Form className={style.formWrapper} autoComplete="off">
          <div className={style.inputsWrapper}>
            <div>
              <label className={style.inputLabel} htmlFor="">
                Name
              </label>
              <div className={style.inputIconWrapper}>
                <IoPersonAdd className={style.inputIcon} />
                <Field className={style.dataInput} type="text" name="name" />
              </div>
              <ErrorMessage
                className={style.errorMessage}
                name="name"
                component="span"
              />
            </div>

            <div>
              <label className={style.inputLabel} htmlFor="">
                Number
              </label>
              <div className={style.inputIconWrapper}>
                <FaPhone className={style.inputIcon} />
                <Field className={style.dataInput} type="text" name="number" />
              </div>
              <ErrorMessage
                className={style.errorMessage}
                name="number"
                component="span"
              />
            </div>
          </div>

          <button className={style.addButton} type="submit">
            Add contact
          </button>
        </Form>
      </motion.div>
    </Formik>
  );
};

export default ContactForm;
