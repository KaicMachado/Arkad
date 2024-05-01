import React from "react";

const Footer = () => {
 return (
  <div className="flex flex-col justify-center items-center my-5">
   <a
    className="hover:scale-110 ease-out duration-300"
    href="https://www.instagram.com/loja.arkad/"
    target="_blank"
   >
    <img
     src="/images/insta-logo.png"
     alt="Logo Instagram"
     width="36"
     height="36"
    />
   </a>
   <span className="mt-1 font-bold">Nos siga na nossa rede social !</span>
   <p className="pt-4 text-xs sm:text-base text-center font-bold text-slate-400">
    {" "}
    {}© Todos os Direitos Reservados - Desenvolvido por{" "}
    <a
     className="text-neutral-900"
     href="https://www.github.com/kaicmachado"
     target="_blank"
    >
     Kaic Machado
    </a>
   </p>
  </div>
 );
};

export default Footer;
