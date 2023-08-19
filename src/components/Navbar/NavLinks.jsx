import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, idx) => (
        <>
          <div key={idx + link} className="px-3 text-left cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group group-hover:text-secondary transition-all ease-linear duration-150"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
              title={"Open " + link?.name}
            >
              {link.name}
              <span className="text-lg md:hidden inline">
                {heading === link.name ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </span>
              <span
                className="text-lg md:mt-1 md:ml-2 md:block hidden group-hover:text-secondary group-hover:rotate-180 transition-all ease-linear duration-150"
                title={"Open " + link?.name}
              >
                <TiArrowSortedDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-16 hidden group-hover:md:block hover:md:block group-hover:text-primary transition-all ease-linear duration-150">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-yellow-100 rotate-45 group-hover:delay-150"
                    ></div>
                  </div>
                  <div className="bg-yellow-100 p-5 grid grid-cols-2 gap-10 group-hover:delay-150">
                    {link.sublinks.map((mysublinks) => (
                      <>
                        <div>
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          <ul>
                            {mysublinks?.sublink?.map((slink) => (
                              <>
                                <li className="text-xs font-light text-black my-5 px-3">
                                  <Link
                                    to={slink.link}
                                    className="text-base hover:text-secondary transition-all duration-150 ease-linear"
                                  >
                                    {slink.name}
                                  </Link>
                                </li>
                              </>
                            ))}
                          </ul>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <>
                <div className="group">
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center group-hover:text-secondary transition-all duration-200 ease-linear cursor-pointer"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline group-hover:text-secondary transition-all duration-200 ease-linear cursor-pointer">
                      {subHeading === slinks.Head ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <>
                        <li className="py-3 pl-14 hover:text-primary transition-all duration-200 ease-linear">
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default NavLinks;
