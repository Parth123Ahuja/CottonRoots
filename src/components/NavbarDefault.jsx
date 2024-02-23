import React from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import "../fonts/vineritc.ttf";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
        Home
      </p>
      <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
        About
      </p>
      <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
        Designs
      </p>
    </ul>
  );
}

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-screen px-8 py-5 md:py-3 bg-[#f7f5ed]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <p className="font-vineritc text-3xl text-[#741a14] "> Cotton Roots</p>

        <img src={logo} alt="Logo" className="w-30 h-20" />

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
