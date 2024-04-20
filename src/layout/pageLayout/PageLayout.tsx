import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";

function PageLayout() {
  const [currentPage, setCurrentPage] = useState("");
  const page = useLocation();

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
      <header className="lg:pt-10 lg:pl-14 md:pl-10">
        <nav className="flex align-middle justify-between">
          <div className="lg:flex-[0_1_40%] md:flex-[0_1_30%] self-center">
            <img
              src="public\assets\shared\logo.svg"
              alt="Space Tourism Logo"
              className=" lg:w-12 lg:h-12 self-center"
            />
          </div>

          <ul className="flex font-barlow-condensed lg:bg-white-04  md:bg-white-04 lg:backdrop-blur-3xl md:backdrop-blur-3xl lg:flex-[0_1_60%] md:flex[0_1_70%] md:gap-10 lg:justify-between md:justify-between lg:pl-[7.75rem] lg:pr-[10.25rem] md:px-12 tracking-[.27em] lg:text-base md:text-sm">
            <li className="text-white lg:py-10 md:py-10">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 md:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold md:hidden">00</span> Home
              </NavLink>
            </li>
            <li className="text-white lg:py-10 md:py-10">
              <NavLink
                to="destination"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 md:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold md:hidden">01</span> Destination
              </NavLink>
            </li>
            <li className="text-white lg:py-10 md:py-10">
              <NavLink
                to="crew"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 md:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold md:hidden">02</span> Crew
              </NavLink>
            </li>
            <li className="text-white lg:py-10 md:py-10">
              <NavLink
                to="technology"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 md:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 md:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold md:hidden">03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="lg:grid place-content-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default PageLayout;
