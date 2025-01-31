import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ArchCanvas, EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rivari",
          from_email: form.email,
          to_email: "info@rivari.cc",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* <form
          ref={formRef}
          action="https://rake.red/api/jp/r3f-rivari"
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your best contact email address?"
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>

          <button
            type='submit'
            className='px-8 py-3 font-bold text-black shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
        <form 
          method="post" 
          action="https://rake.red/api/jp/r3f-rivari"
          className='flex flex-col gap-8 mt-12'
        >
      <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your email</span>
            <input
              type='email'
              name='email'
              
              placeholder="What's your email address?"
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
        
          
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-black'>Your Message</span>
            <textarea
              rows={7}
              name='message'
            

              placeholder='What you want to say?'
              className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          
          <button
            type='submit'
            className='px-8 py-3 font-bold text-black shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <EarthCanvas /> */}
        <ArchCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
