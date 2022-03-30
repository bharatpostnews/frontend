import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

function SocialIcons({ LinksFetch }) {
  const dala = LinksFetch?.nodes;

  return (
    <div className="flex  items-center">
      <p className="font-head text-sm font-medium text-extra px-3">
        Follow us on :
      </p>
      <div className="flex text-secondry text-xl gap-1">
        {LinksFetch?.nodes.map((nodes, i) => {
          if (nodes?.title == "Facebook") {
            return (
              <Link href={nodes?.smlinks?.accountUrl} key={i}>
                <a>
                  <div>
                    <FaFacebook />
                  </div>
                </a>
              </Link>
            );
          } else if (nodes?.title == "Instagram") {
            return (
              <Link href={nodes?.smlinks?.accountUrl} key={i}>
                <a>
                  <div>
                    <AiFillInstagram />
                  </div>
                </a>
              </Link>
            );
          } else if (nodes?.title == "Telegram") {
            return (
              <Link href={nodes?.smlinks?.accountUrl} key={i}>
                <a>
                  <div>
                    <FaTelegram />
                  </div>
                </a>
              </Link>
            );
          } else if (nodes?.title == "WhatsApp") {
            return (
              <Link href={nodes?.smlinks?.accountUrl} key={i}>
                <a>
                  <div>
                    <IoLogoWhatsapp />
                  </div>
                </a>
              </Link>
            );
          } else if (nodes?.title == "Twitter") {
            return (
              <Link href={nodes?.smlinks?.accountUrl} key={i}>
                <a>
                  <div>
                    <AiFillTwitterCircle />
                  </div>
                </a>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SocialIcons;
