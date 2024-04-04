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
  console.log(currentPage);

  return (
    <div
      className={`max-h-dvh h-dvh bg-no-repeat bg-cover transition-all duration-300 ${styles[currentPage]}`}
    >
      <header className="lg:pt-10 lg:pl-14">
        <nav className="flex align-middle justify-between">
          <div className="lg:flex-[0_1_40%] self-center">
            <img
              src="public\assets\shared\logo.svg"
              alt="Space Tourism Logo"
              className=" lg:w-12 lg:h-12 self-center"
            />
          </div>

          <ul className="flex font-barlow-condensed bg-transparent backdrop-blur-3xl lg:flex-[0_1_60%] justify-between lg:pl-[7.75rem] lg:pr-[10.25rem] tracking-[.27em] lg:text-base">
            <li className="text-white lg:py-10">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold">00</span> Home
              </NavLink>
            </li>
            <li className="text-white lg:py-10">
              <NavLink
                to="destination"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold">01</span> Destination
              </NavLink>
            </li>
            <li className="text-white lg:py-10">
              <NavLink
                to="crew"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold">02</span> Crew
              </NavLink>
            </li>
            <li className="text-white lg:py-10">
              <NavLink
                to="technology"
                className={({ isActive }) =>
                  isActive
                    ? "lg:py-10 lg:border-b-4 lg:border-b-white transition-all duration-300"
                    : "lg:py-10 transition-all duration-300"
                }
              >
                <span className="font-bold">03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default PageLayout;
