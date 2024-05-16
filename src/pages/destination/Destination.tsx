import { useEffect, useState } from "react";
import useData from "../../utilities/UseData";

interface DestinationImage {
  png: string;
  webp: string;
}

interface Destinations {
  name: string;
  images: DestinationImage;
  description: string;
  distance: string;
  travel: string;
}

function Destination() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isActive, setIsActive] = useState({});

  const { getDestination } = useData();
  const destination = getDestination();

  useEffect(
    function () {
      setIsActive(destination[0]);
    },
    [destination]
  );

  return (
    <main className="mb-4 lg:max-w-[90rem] md:max-w-[48rem] mt-9 lg:mt-20 md:mt-10 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white mb-8 lg:mb-24 md:mb-14 lg:ml-0 md:ml-10 text-base lg:text-[1.75rem] md:text-[1.25rem] tracking-[0.17em] lg:tracking-[0.17em] md:tracking-[0.17em] text-center md:text-left">
        <span className="font-bold opacity-25 mr-5 lg:mr-7">01</span>
        Pick Your Destination
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-40 md:gap-[3.375rem] px-6 lg:px-0 md:px-[6.125rem]">
        <img
          src={`${destination[currentDestination]["images"]["webp"]}`}
          alt={`Image of ${destination[currentDestination]["name"]}`}
          className="self-center mb-7 md:mb-0 w-[18.75rem] lg:w-[27.8125rem] md:w-[18.75rem] h-[18.75rem] lg:h-[27.8125rem] md:h-[18.75rem]"
        />
        <div className="flex flex-col">
          <ul className="flex text-sm md:text-base text-white gap-7 md:gap-9 mb-5 lg:mb-9 justify-center lg:justify-start ">
            {destination.map((dest: Destinations, i) => (
              <li
                key={dest.name}
                onClick={() => {
                  setCurrentDestination(i);
                  setIsActive(dest);
                }}
                className={`transition-colors cursor-default duration-300 pb-2 lg:pb-3 md:pb-4 ${
                  isActive === dest
                    ? "border-white border-b-4 -mb-1 "
                    : "hover:border-b-4  hover:border-white-05 hover:-mb-1"
                }`}
              >
                <p className="tracking-[0.145em] md:tracking-[0.17em]">
                  {dest.name.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="font-bellefair lg:mb-3 text-white uppercase text-[3.5rem] lg:text-[6.25rem] md:text-[5rem] text-center lg:text-left ">
            {destination[currentDestination]["name"]}
          </h2>

          <p className="font-barlow leading-6 lg:leading-8 md:leading-7 text-light-blue text-base lg:text-lg mb-8 lg:mb-[3.375rem] md:mb-12 text-center lg:text-left ">
            {destination[currentDestination]["description"]}
          </p>

          <hr className="mb-8 lg:mb-7 md:mb-7" />

          <div className="flex flex-col md:flex-row gap-8 lg:gap-20 md:gap-3  lg:justify-start md:justify-around">
            <div className="self-center md:self-auto">
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em] lg:text-left text-center">
                Avg. Distance
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem] lg:text-left text-center">
                {destination[currentDestination]["distance"]}
              </p>
            </div>

            <div className="self-center md:self-auto">
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em] lg:text-left text-center">
                Est. Travel Time
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem] lg:text-left text-center">
                {destination[currentDestination]["travel"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
