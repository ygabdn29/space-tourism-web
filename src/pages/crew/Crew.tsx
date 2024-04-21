function Crew() {
  return (
    <div className="grid lg:grid-cols-2 lg:mt-20 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <div>
        <h1 className="uppercase font-barlow-condensed lg:mb-[9.625rem] text-white lg:text-[1.75rem] md:text-[1.25rem] lg:tracking-[0.17em] md:tracking-[0.17em]">
          <span className="font-bold opacity-25 lg:mr-7  ">02</span>
          Meet Your Crew
        </h1>{" "}
        <div className="flex lg:flex-col">
          <h2 className="uppercase font-bellefair text-white opacity-50 lg:text-[2rem] lg:mb-4">
            Commander
          </h2>
          <h3 className="uppercase font-bellefair text-white lg:text-[3.5rem] lg:mb-7">
            Douglas Hurley
          </h3>
          <p className="font-barlow text-light-blue lg:text-lg md:text-base lg:mb-[7.5rem] md:mb-12 lg:text-left md:text-center">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>

          <ul className="flex">
            <li>
              <button>test</button>
            </li>
            <li>
              <button>test</button>
            </li>
            <li>
              <button>test</button>
            </li>
            <li>
              <button>test</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex lg:gap-40">
        <div>
          <div className="flex ">
            <img
              src="public\assets\crew\image-douglas-hurley.webp"
              alt="Photo of crew member"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
