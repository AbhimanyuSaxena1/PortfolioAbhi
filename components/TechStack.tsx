import React from "react";

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Technologies I&apos;ve worked with
      </h1>
      <div className="w-full min-h-[10vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img   
            src="/react.png"
            className="w-full h-full object-contain"
            alt="React"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/html5.png"
            className="w-full h-full object-contain"
            alt="HTML5"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/css3.png"
            className="w-full h-full object-contain"
            alt="CSS3"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/javascript.png"
            className="w-full h-full object-contain"
            alt="JavaScript"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/tail.svg"
            className="w-full h-full object-contain"
            alt="Tailwind CSS"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/Gsapname.png"
            className="w-full h-full object-contain"
            alt="GSAP"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/Framer.png"
            className="w-full h-full object-contain"
            alt="Framer"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/cloud.svg"
            className="w-full h-full object-contain"
            alt="Cloud"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="https://th.bing.com/th/id/OIP.p39AtedgD_cWI3jLaNfv_AHaEw?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="w-full h-full object-contain"
            alt="Bing"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="https://ui.aceternity.com/logo.png"
            className="w-full h-full object-contain"
            alt="Aceternity"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/vs.png"
            className="w-full h-full object-contain"
            alt="VS Code"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="https://paulstamatiou.com/gear/cursor-app-icon.png"
            className="w-full h-full object-contain"
            alt="Cursor"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="/next.svg"
            className="w-full h-full object-contain"
            alt="Next.js"
          />
        </div>
        <div className="w-full max-w-[100px] aspect-square flex items-center justify-center mx-auto p-4">
          <img
            src="https://www.liblogo.com/img-logo/wi8805we56-wix-logo-wix-free-logo-icons.png"
            className="w-full h-full object-contain"
            alt="Wix"
          />
        </div>
        <div className="w-auto col-7 items-center justify-center row-1  !p-10 ">
          <img
            src="https://companieslogo.com/img/orig/canva-a6365d5a.png?t=1720244494"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-auto col-7 items-center justify-center row-1  !p-10 ">
          <img
            src="https://pngimg.com/uploads/letter_c/letter_c_PNG22.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-auto col-7 items-center justify-center row-1  !p-10 ">
          <img src="/c++.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-auto col-7 items-center justify-center row-1  !p-10 ">
          <img
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
