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
    <main className="grid grid-cols-1 mb-4 lg:grid-cols-[1.25fr_1fr] mt-9 lg:mt-20 md:mt-0 lg:ml-[10.5rem] lg:mr-[5.625rem]">
      <h1 className="uppercase lg:col-span-full font-barlow-condensed mb-8 lg:mb-[9.625rem] md:mb-[3.75rem] lg:mt-0 md:mt-10 md:ml-10 text-white text-base lg:text-[1.75rem] md:text-[1.25rem] tracking-[0.17em] text-center md:text-left">
        <span className="font-bold opacity-25 mr-4 lg:mr-7">02</span>
        Meet Your Crew
      </h1>

      <div className="flex mx-6 lg:ml-10 lg:mr-0 md:mx-[10rem] flex-col lg:text-left text-center">
        <h2 className="uppercase font-bellefair text-white opacity-50 text-base lg:text-[2rem] md:text-2xl mb-2 md:mb-8">
          {crews[currentCrew].role}
        </h2>

        <h3 className="uppercase font-bellefair text-white text-2xl lg:text-[3.5rem] md:text-[2.5rem] mb-4 lg:mb-7 md:mb-8">
          {crews[currentCrew].name}
        </h3>
        <p className="font-barlow leading-6 lg:leading-8 md:leading-7 text-light-blue lg:text-lg md:text-base lg:text-left md:text-center">
          {crews[currentCrew].bio}
        </p>
      </div>

      <ul className="row-start-4 lg:col-start-1 flex justify-center lg:justify-normal lg:self-auto md:self-center lg:ml-10 lg:mr-0 md:mx-[10rem] gap-4 lg:gap-6 lg:mt-[7.5rem] md:mt-10 mb-8 md:pb-10">
        {crews.map((crew, i) => (
          <li key={crew.name} className="lg:block md:inline-flex">
            <button
              className={`p-[0.315rem] lg:p-2  rounded-full transition-all duration-300 ${
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

      <div className="row-start-2 md:row-auto pointer-events-none justify-self-center">
        <img
          src={`${crews[currentCrew]["images"]["webp"]}`}
          alt="Photo of crew member"
          className="md:fixed bottom-0 max-h-[14rem] lg:max-h-full md:max-h-[30rem] lg:right-[4.65rem] md:right-1/2 lg:translate-x-0 md:translate-x-1/2 lg:px-0 md:px-[9rem] md:pt-10 lg:pt-0"
        />
      </div>

      <hr className="row-start-3 border-1 border-[#383B4B] mx-6 mb-8 md:hidden" />
    </main>
  );
}

export default Crew;
