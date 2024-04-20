import { useState } from "react";
import useData from "../../utilities/UseData";

function Destination() {
  const [currentDestination, setCurrentDestination] = useState(0);
  console.log(currentDestination);

  const { getDestination } = useData();
  const destination = getDestination();

  return (
    <div className="lg:mt-20 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white lg:text-[1.75rem] lg:tracking-[0.17em]">
        <span className="font-bold opacity-25 lg:mr-7  ">01</span>
        Pick Your Destination
      </h1>

      <div className="flex lg:gap-40">
        <img
          src={`${destination[currentDestination]["images"]["webp"]}`}
          alt="Image of destination"
        />
        <div>
          <ul className="flex text-white lg:gap-9">
            {destination.map((dest, i) => (
              <li
                key={dest.name}
                onClick={() => {
                  setCurrentDestination(i);
                }}
              >
                {dest.name}
              </li>
            ))}
          </ul>

          <h2 className="font-bellefair text-white uppercase lg:text-[6.25rem]">
            {destination[currentDestination]["name"]}
          </h2>

          <p className="font-barlow text-light-blue text-lg">
            {destination[currentDestination]["description"]}
          </p>
          <hr />

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
