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
    <div className="lg:max-w-[90rem] md:max-w-[48rem] lg:mt-20 md:mt-10 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white lg:mb-24 md:mb-14 lg:ml-0 md:ml-10 lg:text-[1.75rem] md:text-[1.25rem] lg:tracking-[0.17em] md:tracking-[0.17em]">
        <span className="font-bold opacity-25 lg:mr-7  ">01</span>
        Pick Your Destination
      </h1>

      <div className="flex lg:flex-row md:flex-col lg:gap-40 md:gap-[3.375rem] lg:px-0 md:px-[6.125rem]">
        <img
          src={`${destination[currentDestination]["images"]["webp"]}`}
          alt={`Image of ${destination[currentDestination]["name"]}`}
          className="lg:w-[27.8125rem] md:w-[18.75rem] lg:h-[27.8125rem] md:h-[18.75rem] md:self-center"
        />
        <div className="flex flex-col">
          <ul className="flex text-white lg:gap-9 md:gap-9 lg:mb-9 lg:justify-start md:justify-center">
            {destination.map((dest: Destinations, i) => (
              <li
                key={dest.name}
                onClick={() => {
                  setCurrentDestination(i);
                  setIsActive(dest);
                }}
                className={`transition-colors duration-300 lg:pb-3 md:pb-4 ${
                  isActive === dest
                    ? "lg:border-b-4 md:border-b-4 lg:-mb-1 md:-mb-1 lg:border-white md:border-white"
                    : "lg:hover:border-b-4 md:hover:border-b-4 lg:hover:border-white-05 md:hover:border-white-05 lg:hover:-mb-1 md:hover:-mb-1"
                }`}
              >
                {dest.name.toUpperCase()}
              </li>
            ))}
          </ul>

          <h2 className="font-bellefair lg:mb-3 text-white uppercase lg:text-[6.25rem] md:text-[5rem] lg:text-left md:text-center">
            {destination[currentDestination]["name"]}
          </h2>

          <p className="font-barlow text-light-blue lg:text-lg md:text-base lg:mb-[3.375rem] md:mb-12 lg:text-left md:text-center">
            {destination[currentDestination]["description"]}
          </p>
          <hr className="lg:mb-7 md:mb-7" />

          <div className="flex lg:gap-20 md:gap-3 lg:justify-start md:justify-around">
            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em] lg:text-left md:text-center">
                Avg. Distance
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem] lg:text-left md:text-center">
                {destination[currentDestination]["distance"]}
              </p>
            </div>

            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em] lg:text-left md:text-center">
                Est. Travel Time
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem] lg:text-left md:text-center">
                {destination[currentDestination]["travel"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
