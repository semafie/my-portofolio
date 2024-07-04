import React from 'react';

const Footer = () => {
  return (
    <footer id="social-media" className="relative pb-20 bg-dark-800 text-white px-7 mt-32  text-center sm:px-20 ll:h-[90vh] ll:px-40 ll:px-60">
      <h2 className="text-3xl mb-10 font-bold ml-5 sm:text-4xl sm:mb-16 ll:mb-28 ll:text-5xl">React Me!</h2>
      
      <div className="mb-10 ll:mb-20">
        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=restuimamsafii@gmail.com" target='_blank' className="mb-3 flex gap-2 ll:gap-6 items-center"><i className='bx bxs-envelope text-3xl text-gray-300  sm:text-4xl ll:text-5xl' ></i><p className="sm:text-xl ll:text-3xl">restuimamsafii@gmail.com</p></a>
        <a href="https://www.instagram.com/semafie_ris/"  className=" mb-3 flex gap-2 items-center ll:gap-6"><i className=' bx bxl-instagram-alt text-3xl text-gray-300 sm:text-4xl ll:text-5xl' ></i><p className="sm:text-xl ll:text-3xl">semafie_ris</p></a>
        <a href="https://www.linkedin.com/in/restu-imam-safii-6bb65424a/" target='_blank' className=" mb-3 flex gap-2 items-center ll:gap-6"><i className='bx bxl-linkedin-square text-3xl text-gray-300 sm:text-4xl ll:text-5xl' ></i><p className="sm:text-xl ll:text-3xl">go to Link..</p></a>
        <a href="https://wa.me/+6283108833461"  className=" mb-3  flex gap-2 items-center ll:gap-6"><i className=' bx bxl-whatsapp-square text-3xl text-gray-300 sm:text-4xl ll:text-5xl' ></i><p className="sm:text-xl ll:text-3xl">go to Link..</p ></a>
      </div>
      <p className="mt-4 ll:text-xl">2024-PRESENT ©semafie</p>
    </footer>
  );
};

export default Footer;
