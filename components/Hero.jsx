
"use client";
import React from 'react';

//importo componentes de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Importo estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

 export const Hero = () => {
  const carouselImages = [
    "/images/photo-1565299624946-b28f40a0ae38.avif",
    "/images/premium_photo-1673347665800-e3d345610a99.avif", 
    "/images/photo-1679310249395-ae267ae0d273.avif"
  ];

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col md:flex-row items-center overflow-hidden bg-white border-b border-slate-50">
      
      {/* LADO IZQUIERDO: Carrusel más compacto */}
      <div className="relative w-full md:w-1/2 h-[350px] md:h-[80vh]">
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            clipPath: "ellipse(90% 100% at 0% 50%)", // Curva un poco más cerrada para ganar espacio
          }}
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt="Slide" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-orange-900/10 z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* LADO DERECHO: Texto con paddings reducidos */}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-8 md:py-0 flex flex-col justify-center items-start">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3">
          Local Gastronomy Guide
        </span>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
          The best flavors of <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-orange-500">Colonia.</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-100 -z-10"></span>
          </span>
        </h1>
        
        <p className="text-slate-600 text-base md:text-lg mb-8 max-w-sm leading-relaxed">
          Discover where to eat today in the most magical city in Uruguay. 
          Expertly curated local spots.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-200 text-sm">
          Explore Restaurants
        </button>
      </div>

      

    </section>
  );
};