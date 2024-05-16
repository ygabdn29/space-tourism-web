import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";

const navStyleBase =
  "transition-all duration-300 font-barlow-condensed bg-white-04 backdrop-blur-3xl tracking-[.27em]";
const navStyleDesktop =
  "lg:flex-[0_1_60%] lg:justify-between lg:pl-[7.75rem] lg:pr-[10.25rem] lg:text-base";
const navStleTablet =
  "md:flex-row md:static md:h-auto md:w-auto md:flex[0_1_70%] md:gap-10 md:justify-between md:px-12 md:text-sm";

function PageLayout() {
  const [currentPage, setCurrentPage] = useState("");
  const [navToggle, setNavToogle] = useState(false);
  const page = useLocation();

  const navStyleMobile = `absolute flex flex-col gap-8 z-30 h-dvh w-[15.875rem] top-0 right-0 ${
    navToggle
      ? "visible pointer-events-auto opacity-100"
      : "invisible md:visible pointer-events-none md:pointer-events-auto opacity-0 md:opacity-100"
  }`;

  useEffect(
    function () {
      setCurrentPage(page.pathname.split("/")[1]);
    },
    [page]
  );

  return (
    <div
      className={`max-h-dvh h-dvh bg-no-repeat bg-cover transition-all duration-300 ${styles[currentPage]}`}
    >
      <header className="px-6 pt-6 lg:pt-10 lg:pl-14 md:pl-10 md:pr-0">
        <nav className="flex align-middle justify-between">
          <div className="lg:flex-[0_1_40%] md:flex-[0_1_30%] self-center">
            <img
              src="public\assets\shared\logo.svg"
              alt="Space Tourism Logo"
              className=" lg:w-12 lg:h-12 self-center"
            />
          </div>

          <ul
            className={`${navStyleBase} ${navStyleDesktop} ${navStleTablet} ${navStyleMobile}`}
          >
            <li className="uppercase text-white ml-8 mt-32 md:mt-0 md:ml-0 md:py-10">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive
                    ? "md:py-10 md:border-b-4 md:border-b-white transition-all duration-300"
                    : "md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold mr-3 md:hidden">00</span> Home
              </NavLink>
            </li>

            <li className="uppercase text-white ml-8 md:py-10 md:ml-0">
              <NavLink
                to="destination"
                className={({ isActive }) =>
                  isActive
                    ? "md:py-10 md:border-b-4 md:border-b-white transition-all duration-300"
                    : "md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold mr-3 md:hidden">01</span> Destination
              </NavLink>
            </li>

            <li className="uppercase text-white ml-8 md:py-10 md:ml-0">
              <NavLink
                to="crew"
                className={({ isActive }) =>
                  isActive
                    ? "md:py-10 md:border-b-4 md:border-b-white transition-all duration-300"
                    : "md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold mr-3 md:hidden">02</span> Crew
              </NavLink>
            </li>
            <li className="uppercase text-white ml-8 lg:py-10 md:ml-0 md:py-10">
              <NavLink
                to="technology"
                className={({ isActive }) =>
                  isActive
                    ? "md:py-10 md:border-b-4 md:border-b-white transition-all duration-300"
                    : "md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold mr-3 md:hidden">03</span> Technology
              </NavLink>
            </li>
          </ul>

          <button
            className="z-40 md:hidden"
            onClick={() => setNavToogle((navToggle) => !navToggle)}
          >
            <img
              src={
                navToggle
                  ? "public/assets/shared/icon-close.svg"
                  : "public/assets/shared/icon-hamburger.svg"
              }
              alt=""
            />
          </button>
        </nav>
      </header>

      <div className="md:grid md:place-content-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default PageLayout;
