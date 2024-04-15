function Destination() {
  return (
    <div className="lg:mt-20 lg:ml-[10.5rem] lg:mr-[10.25rem]">
      <h1 className="uppercase font-barlow-condensed text-white lg:text-[1.75rem] lg:tracking-[0.17em]">
        <span className="font-bold opacity-25 lg:mr-7  ">01</span>
        Pick Your Destination
      </h1>

      <div className="flex lg:gap-40">
        <img
          src="public\assets\destination\image-moon.webp"
          alt="Image of destination"
        />
        <div>
          <ul className="flex text-white">
            <li>Planet</li>
            <li>Planet</li>
            <li>Planet</li>
            <li>Planet</li>
          </ul>

          <h2 className="font-bellefair text-white uppercase lg:text-[6.25rem]">
            Moon
          </h2>

          <p className="font-barlow text-light-blue text-lg">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />

          <div className="flex lg:gap-20">
            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em]">
                Avg. Distance
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem]">
                384,400 KM
              </p>
            </div>

            <div>
              <p className="font-barlow text-sm text-light-blue tracking-[0.17em]">
                Est. Travel Time
              </p>

              <p className="font-bellefair uppercase text-white text-[1.75rem]">
                3 Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
