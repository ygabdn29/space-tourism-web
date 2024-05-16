function Home() {
  return (
    <main className="lg:flex mt-[3.75rem] lg:mt-[15.625rem] md:mt-[6.625rem] px-6 lg:px-[10.25rem] md:px-40 lg:max-w-[90rem]">
      <div className="flex flex-col lg:flex-[0_1_45%]">
        <h1 className="uppercase text-light-blue font-barlow-condensed text-base lg:text-[1.75rem] md:text-xl tracking-[0.17em] lg:tracking-[0.15em] md:tracking-[0.185em] text-center lg:text-left ">
          So, You Want To Travel to
        </h1>
        <p className="uppercase text-white font-bellefair lg:mt-6 text-[5rem] lg:text-[9.375rem] md:text-[9.375rem] text-center lg:text-left">
          Space
        </p>

        <p className="lg:flex-[0_1_50%] mb-[5rem] lg:mb-0 md:mb-[10rem] text-light-blue text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-center lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="lg:flex-[0_1_55%] lg:self-end ">
        <div className="relative bg-white rounded-full h-[9.375rem] lg:h-[17.125rem] md:h-[15.125rem] w-[9.275rem] lg:w-[17.125rem] md:w-[15.125rem] mx-auto lg:ml-auto lg:mr-0">
          <a
            href=""
            className="absolute uppercase font-bellefair lg:text-[2rem] md:text-[2rem] top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
          >
            Explore
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;
