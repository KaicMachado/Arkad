import React from "react";
import Truck from "./Truck";

const Detalhes = () => {
 return (
  <section className="flex w-4/5 sm:w-3/4 mx-auto sm:grid sm:grid-cols-2 sm:p-5 justify-center">
   <div className="hidden sm:flex sm:flex-col sm:items-center sm:p-5">
    <h4 className="font-bold text-2xl mb-4">Entregamos em todo o Brasil !</h4>
    <Truck />
   </div>
   <div className="flex flex-col font-bold text-center p-5">
    <h4 className="text-2xl">Produtos de Qualidade</h4>
    <p className="text-sm sm:text-lg text-slate-500">
     Nossos chaveiros são feitos de acrílico de qualidade garantindo
     durabilidade e beleza por mais tempo.
    </p>
   </div>
  </section>
 );
};

export default Detalhes;
