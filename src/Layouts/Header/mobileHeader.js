import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import format from "date-fns/format";
import Link from "next/link";

function MobileHeader({ navLinks }) {
  const dateTimeDay = format(new Date(), "PPPPp");
  const [menubtn, setMenubtn] = useState(true);
  return (
    <div className="lg:hidden">
      {menubtn ? (
        <div className="bg-primary">
          <div>
            {/* wrapper */}
            <div className="flex px-2 py-3 items-center gap-7 ">
              {/* hamburrger */}
              <a onClick={() => setMenubtn(false)}>
                <div className="border-2 flex items-center p-1 rounded border-extra">
                  <div className="text-white text-2xl">
                    <BiMenu />
                  </div>
                  <div className="text-white font-medium">
                    <p>Menu</p>
                  </div>
                </div>
              </a>
              {/* time */}
              <div className="text-white text-sm">{dateTimeDay}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary">
          <div className="w-full h-screen animate fadeInLeft ">
            <div className="mb-5 text-white text-4xl border-b-2 border-extra ">
              <a onClick={() => setMenubtn(true)}>
                <div className="py-2 px-3">
                  <IoClose />
                </div>
              </a>
            </div>
            <div className="mb-5">
              <Link href={"/news/"}>
                <a>
                  <p className="text-white font-semibold text-xl font-bd2 px-5">
                    ताजा खबरें
                  </p>
                </a>
              </Link>
            </div>
            <div className="border-b-2 border-t-2 border-extra px-5 ">
              {navLinks?.nodes.map((nodes, i) => {
                return (
                  <Link href={nodes?.path} key={i}>
                    <a>
                      <p className="text-white font-semibold text-xl font-bd2 py-2 border-b-2 border-third2">
                        {nodes?.label}
                      </p>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
