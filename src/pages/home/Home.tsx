function Home() {
  return (
    <main className="lg:flex lg:mt-[15.625rem] lg:px-[10.25rem] lg:max-w-[90rem]">
      <div className="flex flex-col lg:flex-[0_1_45%] lg:gap-6">
        <h1 className=" uppercase text-light-blue font-barlow-condensed lg:text-[1.75rem]">
          So, You Want To Travel to
          <span className="uppercase text-white font-bellefair lg:block lg:mt-6 lg:text-9xl ">
            Space
          </span>
        </h1>

        <p className="lg:flex-[0_1_50%] text-light-blue lg:text-lg ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="lg:flex-[0_1_55%] lg:self-end">
        <div className="relative bg-white rounded-full lg:h-[17.125rem] lg:w-[17.125rem] lg:ml-auto lg:mr-0 ">
          <a
            href=""
            className="absolute uppercase font-bellefair lg:text-[2rem] top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
          >
            Explore
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;
