import { motion } from "framer-motion";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SendEmail() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const form = useRef();

  const HandleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorMsg("Name is Required!");
    } else if (number === "") {
      setErrorMsg("Number is Required!");
    } else if (email === "") {
      setErrorMsg("Email is Required!");
    } else if (!emailValidation(email)) {
      setErrorMsg("Email is not valid!");
    } else if (subject === "") {
      setErrorMsg("Subject is Required!");
    } else if (message === "") {
      setErrorMsg("Message is Required!");
    } else {
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vsq3vy4', 'template_g97kxul', form.current, '0odBJYhU5Mm_pVnMe')
      .then(
        () => {
          setSuccessMsg(`Thank You ${name}, Your Message Has Been Sent Successfully!`);
          setName("");
          setNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrorMsg("");

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);
        },
        (error) => {
          setErrorMsg("Failed to send the message. Please try again later.");
          console.log('FAILED...', error.text);

          // Clear error message after 5 seconds
          setTimeout(() => {
            setErrorMsg("");
          }, 5000);
        }
      );
  };

  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className='w-full  p-4 lgl:p-8 bg-dark h-full flex flex-col gap-5 justify-betweeen rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne'
      >
        <form ref={form} className='w-[95%] mx-2 flex flex-col gap-2 py-2' onSubmit={HandleSend}>
          {errorMsg && (
            <p className='rounded-[8px] py-3 mt-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-designColor text-base tracking-wide animate-bounce'>
              {errorMsg}
            </p>
          )}
          {successMsg && (
            <p className='rounded-[8px] pt-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-[#08e605] text-base tracking-wide animate-bounce'>
              {successMsg}
            </p>
          )}
          <div className='w-full mt-5 lgl:flex gap-10'>
            <div className='w-full lgl:w-1/2 flex-row lgl:flex-col'>
              <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</label>
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="from_name"
                className={`${errorMsg === "Name is Required!" && "outline-designColor"} inputText`}
                placeholder='Enter Your Name'
              />
            </div>
            <div className='w-full lgl:w-1/2 flex-row lgl:flex-col'>
              <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Phone Number</label>
              <input
                type='text'
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                name="number"
                className={`${errorMsg === "Number is Required!" && "outline-designColor"} inputText`}
                placeholder='Enter Phone Number'
              />
            </div>
          </div>
          <div>
            <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Email</label>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              className={`${(errorMsg === "Email is Required!" || errorMsg === "Email is not valid!") && "outline-designColor"} inputText`}
              placeholder='Enter Your Email'
            />
          </div>
          <div>
            <label className='text-sm text-gray-400 uppercase tracking-wide'>Subject</label>
            <input
              type='text'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              name="subject"
              className={`${errorMsg === "Subject is Required!" && "outline-designColor"} inputText`}
              placeholder='Enter Subject'
            />
          </div>
          <div>
            <label className='text-sm text-gray-400 uppercase tracking-wide'>Message</label>
            <textarea
              cols="30"
              rows="15"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              className={`${errorMsg === "Message is Required!" && "outline-designColor"} inputText`}
              placeholder='Enter Your Message'
            ></textarea>
          </div>
          <div className='w-full mt-4 mb-3 flex items-center justify-center'>
            <button className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 transition-all cursor-pointer duration-300 text-white mx-4">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
