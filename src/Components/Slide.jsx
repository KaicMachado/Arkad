import React, { useEffect, useRef, useState } from "react";

const Slide = ({ slides }) => {
 const [active, setActive] = useState(0);
 const [position, setPosition] = useState(0);
 const contentRef = useRef();

 useEffect(() => {
  const { width } = contentRef.current.getBoundingClientRect();
  setPosition(-(width * active));
 }, [active]);

 function slidePrev() {
  if (active === 0) return null;
  setActive(active - 1);
 }

 function slideNext() {
  if (active === slides.length - 1) return null;
  setActive(active + 1);
 }

 return (
  <section className="overflow-hidden">
   <div className="flex" ref={contentRef}>
    {slides.map((slide) => (
     <div
      className="mx-[10%] w-4/5 shrink-0 my-0 py-1 text-center transition-transform duration-700"
      style={{ transform: `translateX(${position}px)` }}
      key={slide.titulo}
     >
      <img className="mx-auto" src={slide.src} alt={slide.titulo} />
      <h3 className="text-2xl sm:text-3xl font-bold mt-4">{slide.titulo}</h3>
      <p className="text-base sm:text-xl  mt-2 font-bold">{slide.subtitulo}</p>
     </div>
    ))}
   </div>
   <nav className="flex justify-around mt-4">
    <button
     className="py-2 px-4 bg-slate-50 rounded-md hover:scale-110 transition-transform"
     onClick={slidePrev}
    >
     Anterior
    </button>
    <button
     className="py-2 px-4 bg-slate-50 rounded-md hover:scale-110 transition-transform"
     onClick={slideNext}
    >
     Próximo
    </button>
   </nav>
  </section>
 );
};

export default Slide;
