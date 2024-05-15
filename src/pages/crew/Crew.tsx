import { useEffect, useState } from "react";
import useData from "../../utilities/UseData";

function Crew() {
  const [currentCrew, setCurrentCrew] = useState(0);
  const [isActive, setIsActive] = useState({});

  const { getCrew } = useData();
  const crews = getCrew();

  useEffect(
    function () {
      setIsActive(crews[0]);
    },
    [crews]
  );

  return (
    <div className="flex flex-col lg:flex-row lg:gap-24 lg:mt-20 lg:ml-[10.5rem] lg:mr-[5.625rem]">
      <div className="flex-[1_1_60%]">
        <h1 className="uppercase font-barlow-condensed lg:mb-[9.625rem] md:mb-[3.75rem] lg:mt-0 md:mt-10 lg:ml-0 md:ml-10 text-white lg:text-[1.75rem] md:text-[1.25rem] lg:tracking-[0.17em] md:tracking-[0.17em]">
          <span className="font-bold opacity-25 lg:mr-7 md:mr-4 ">02</span>
          Meet Your Crew
        </h1>

        <div className="flex lg:mx-0 md:mx-[9.6875rem] md:flex-col lg:text-left md:text-center">
          <h2 className="uppercase font-bellefair text-white opacity-50 lg:text-[2rem] md:text-2xl lg:mb-4">
            {crews[currentCrew].role}
          </h2>

          <h3 className="uppercase font-bellefair text-white lg:text-[3.5rem] md:text-[2.5rem] lg:mb-7">
            {crews[currentCrew].name}
          </h3>
          <p className="font-barlow text-light-blue lg:text-lg md:text-base   lg:text-left md:text-center lg:leading-none md:leading-7">
            {crews[currentCrew].bio}
          </p>

          <ul className="flex lg:self-auto md:self-center lg:gap-6 md:gap-4 lg:mt-[7.5rem] md:mt-10">
            {crews.map((crew, i) => (
              <li key={crew.name} className="lg:block md:inline-flex">
                <button
                  className={`lg:p-2 md:p-1 rounded-full transition-all duration-300 ${
                    isActive === crew ? "bg-white" : "bg-[#979797]"
                  }`}
                  onClick={() => {
                    setIsActive(crew);
                    setCurrentCrew(i);
                  }}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-[1_1_40%]">
        <div className="">
          <img
            src={`${crews[currentCrew]["images"]["webp"]}`}
            alt="Photo of crew member"
            className="fixed bottom-0 lg:max-h-full md:max-h-[32rem] lg:right-24 md:right-1/2 lg:translate-x-0 md:translate-x-1/2 lg:px-0 md:px-[9rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew;
