import React from "react";

const Shape = () => (
  <img
    src="https://cdn.easyfrontend.com/pictures/hero/hero_28.svg"
    alt=""
    className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-[1] rounded-[50px] img-fluid"
  />
);

const Hero = () => {
  return (
    <section className="ezy__header25 light pt-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center lg:text-start items-center">
          <div className="col-span-12 lg:col-span-6 py-12">
            <h1 className="text-3xl font-bold leading-[1.1] md:text-[62px] mb-2">
              Hi!! Iam Mamatha Panday.
            </h1>
            <p className="text-[22px] leading-snug opacity-80 my-6">
                I am P. Mamatha, a B.Tech student from the Computer Science and Engineering department at KITSW.
                 I enjoy learning new things and working on projects that help me improve my technical skills.
                 I’m always open to new opportunities where I can gain experience and grow.
            </p>
            <p className="text-[22px] leading-snug opacity-80 mb-6">
                 Apart from academics, I enjoy sketching and painting.
                  I believe in learning step by step and giving my best in whatever I do.

            </p>

            
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Shape />
              <img
                src="https://img.freepik.com/free-photo/cute-cartoon-kid-posing-portrait_23-2151870586.jpg?semt=ais_hybrid&w=740"
                alt=""
                width="400px"
                className="relative left-1/2 -translate-x-[55%] img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
