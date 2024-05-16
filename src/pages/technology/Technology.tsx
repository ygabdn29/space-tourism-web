import { useEffect, useState } from "react";
import useData from "../../utilities/UseData";

function Technology() {
  const [currentTechnology, setCurrentTechnology] = useState(0);
  const [activeTechnology, setActiveTechnology] = useState({});

  const { getTechnology } = useData();
  const technologies = getTechnology();

  useEffect(
    function () {
      setActiveTechnology(technologies[0]);
    },
    [technologies]
  );

  return (
    <main className="flex flex-col mb-4 lg:gap-x-20 lg:ml-[10.25rem] mt-9 lg:mt-20 md:mt-10">
      <h1 className="col-span-full uppercase font-barlow-condensed text-white mb-8 lg:mb-24 md:mb-[3.75rem] lg:ml-0 md:ml-10 lg:text-[1.75rem] md:text-[1.25rem] tracking-[0.17em] text-center md:text-left">
        <span className="font-bold opacity-25 mr-4 lg:mr-7 md:mr-4">03</span>
        Space Launch 101
      </h1>

      <div className="grid lg:grid-cols-[fit-content(100%)_1.25fr_1fr] md:grid-cols-1 lg:gap-20">
        <div className="flex mt-9 lg:my-auto md:mt-14 justify-center lg:text-[2rem] md:text-2xl">
          <ul className="flex lg:flex-col gap-4 lg:gap-8 ">
            {technologies.map((tech, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setActiveTechnology(tech);
                    setCurrentTechnology(i);
                  }}
                  className={`relative rounded-full p-5 lg:p-10 md:p-[1.875rem] transition-all duration-300 ${
                    activeTechnology === tech
                      ? "bg-white"
                      : "text-white border-[1px] border-white-05 hover:border-white"
                  }`}
                >
                  <span
                    className={`absolute font-bellefair  top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2`}
                  >
                    {i + 1}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col mt-7 mx-6 lg:mr-12 md:mx-0 lg:my-auto md:mt-11  text-center lg:text-left">
          <p className="uppercase text-light-blue font-barlow-condensed lg:text-base tracking-[0.145em] md:tracking-[0.17em] mb-2 lg:mb-3 md:mb-4">
            The Terminology...
          </p>

          <h3 className="uppercase font-bellefair text-white text-2xl lg:text-[3.5rem] md:text-[2.5rem] mb-4 lg:mb-5 md:mb-4">
            {technologies[currentTechnology]?.name}
          </h3>

          <p className="font-barlow lg:mx-0 md:mx-40 text-light-blue text-base lg:text-lg md:text-base leading-6 lg:leading-8 md:leading-7">
            {technologies[currentTechnology].description}
          </p>
        </div>

        <div className="row-start-1 lg:row-auto">
          <picture>
            <source
              srcSet={`${technologies[currentTechnology]["images"].landscape}`}
              media="(max-width: 768px)"
            />
            <img
              src={`${technologies[currentTechnology]["images"].portrait}`}
              alt={`Illustration of ${technologies[currentTechnology].name}`}
              className="transition-all duration-300 w-full h-[10.625rem] lg:h-[33rem] md:h-auto"
            />
          </picture>
        </div>
      </div>
    </main>
  );
}

export default Technology;
