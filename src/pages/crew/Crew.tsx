function Crew() {
  return (
    <div className="lg:mt-20 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white lg:text-[1.75rem] lg:tracking-[0.17em]">
        <span className="font-bold opacity-25 lg:mr-7  ">02</span>
        Meet Your Crew
      </h1>

      <div className="flex lg:gap-40">
        <div>
          <div className="flex ">
            <div className="flex lg:flex-col">
              <h2>Commander</h2>
              <h3>Douglas Hurley</h3>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
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
