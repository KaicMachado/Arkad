import React from "react";
import Truck from "./Truck";

const Detalhes = () => {
 return (
  <section className="flex w-4/5 md:w-3/4 mx-auto md:grid md:grid-cols-2 md:p-5 justify-center">
   <div className="hidden md:flex md:flex-col md:items-center md:p-5">
    <h4 className="font-bold text-2xl mb-4">Entregamos em todo o Brasil !</h4>
    <Truck />
   </div>
   <div className="flex flex-col font-bold text-center p-5">
    <h4 className="text-2xl">Produtos de Qualidade</h4>
    <p className="text-md md:text-lg text-slate-500">
     Nossos chaveiros são feitos de acrílico de qualidade garantindo
     durabilidade e beleza por mais tempo.
    </p>
   </div>
  </section>
 );
};

export default Detalhes;
