import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center items-center h-16 bg-black text-white'>
      <p>Copyright &copy; {new Date().getFullYear()} EGG All rights reserved.</p>
    </div>
  );
}

export default Footer;
