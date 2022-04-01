import React from "react";
import Link from "next/link";

function HeaderThree({ navLinks }) {
  return (
    <div className=" bg-primary py-2 hidden lg:block xl:block 2xl: block">
      <div className="flex gap-8 text-slate-50 font-bold font-Poppins mx-40">
        <Link href="/news/">
          <a>
            <p> ताजा खबरें</p>
          </a>
        </Link>
        {navLinks?.nodes.map((nodes, i) => {
          return (
            <Link href={nodes?.path} key={i}>
              <a>
                <p className="">{nodes?.label}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderThree;
