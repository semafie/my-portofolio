import React from 'react';

const Footer = () => {
  return (
    <footer className="relative pb-20 bg-dark-800 text-white px-7 mt-32  text-center">
      <h2 className="text-3xl mb-5 font-bold ml-5">React Me!</h2>
      
      <div className="">
        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=restuimamsafii@gmail.com" target='_blank' className="flex gap-2  items-center"><i className='bx bxs-envelope text-3xl text-gray-300' ></i><p className="">restuimamsafii@gmail.com</p></a>
        <a href="https://www.instagram.com/semafie_ris/"  className="flex gap-2 items-center"><i className='bx bxl-instagram-alt text-3xl text-gray-300' ></i><p>semafie_ris</p></a>
        <a href="https://www.linkedin.com/in/restu-imam-safii-6bb65424a/" target='_blank' className="flex gap-2 items-center"><i className='bx bxl-linkedin-square text-3xl text-gray-300' ></i><p>go to Link..</p></a>
        <a href="https://wa.me/+6283108833461"  className="flex gap-2 items-center"><i className='bx bxl-whatsapp-square text-3xl text-gray-300' ></i><p>go to Link..</p></a>
      </div>
      <p className="mt-4">2024-PRESENT © semafie</p>
    </footer>
  );
};

export default Footer;
