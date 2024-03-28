import React from "react";

const Header = () => {
 return (
  <nav className="w-3/4 mx-auto flex justify-center sm:justify-between py-4 px-7">
   <h1 className="text-3xl font-bold">Arkad</h1>
   <ul className="hidden sm:flex gap-6 font-semibold text-neutral-500">
    <li>
     <a className="hover:text-slate-800" href="#">
      Home
     </a>
    </li>
    <li>
     <a className="hover:text-slate-800" href="#">
      Produtos
     </a>
    </li>
    <li>
     <a className="hover:text-slate-800" href="#">
      Contato
     </a>
    </li>
   </ul>
  </nav>
 );
};

export default Header;
