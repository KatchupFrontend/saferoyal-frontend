import React from 'react'
import Form from '../components/Form'
import HLayout from '../components/HLayout'
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer'
import ContactNav from '../components/ContactNav';

const Contact = () => {
  return (
    <div>
      <ContactNav/>
        <Form />
      <Footer/>
    </div>
  );
}

export default Contact