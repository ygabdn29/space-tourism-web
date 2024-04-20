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

  useEffect(function () {
    setIsActive(destination[0]);
  }, []);

  return (
    <div className="lg:max-w-[90rem] lg:mt-20 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white lg:mb-24 lg:text-[1.75rem] lg:tracking-[0.17em]">
        <span className="font-bold opacity-25 lg:mr-7  ">01</span>
        Pick Your Destination
      </h1>

      <div className="flex lg:gap-40">
        <img
          src={`${destination[currentDestination]["images"]["webp"]}`}
          alt={`Image of ${destination[currentDestination]["name"]}`}
          className="lg:w-[27.8125rem]  lg:h-[27.8125rem]"
        />
        <div className="flex lg:flex-col">
          <ul className="flex text-white lg:gap-9 lg:mb-9">
            {destination.map((dest: Destinations, i) => (
              <li
                key={dest.name}
                onClick={() => {
                  setCurrentDestination(i);
                  setIsActive(dest);
                }}
                className={`transition-colors duration-300 lg:pb-3 ${
                  isActive === dest
                    ? "lg:border-b-4 lg:-mb-1 lg:border-white"
                    : "lg:hover:border-b-4 lg:hover:border-white-05 lg:hover:-mb-1"
                }`}
              >
                {dest.name.toUpperCase()}
              </li>
            ))}
          </ul>

          <h2 className="font-bellefair lg:mb-3 text-white uppercase lg:text-[6.25rem]">
            {destination[currentDestination]["name"]}
          </h2>

          <p className="font-barlow text-light-blue lg:text-lg lg:mb-[3.375rem]">
            {destination[currentDestination]["description"]}
          </p>
          <hr className="lg:mb-7" />

          <div className="flex lg:gap-20">
            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em]">
                Avg. Distance
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem]">
                {destination[currentDestination]["distance"]}
              </p>
            </div>

            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em]">
                Est. Travel Time
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem]">
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
