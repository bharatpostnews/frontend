import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

function PostSocialShare({ postsharinglinks }) {
  return (
    <div className="flex items-center ">
      <div className="flex text-secondry text-4xl gap-1">
        <Link href={postsharinglinks.facebook}>
          <div>
            <FaFacebook />
          </div>
        </Link>

        <Link href={postsharinglinks.instagram}>
          <div>
            <AiFillInstagram />
          </div>
        </Link>

        <Link href={postsharinglinks.telegram}>
          <div>
            <FaTelegram />
          </div>
        </Link>

        <Link href={postsharinglinks.whatsapp}>
          <div>
            <IoLogoWhatsapp />
          </div>
        </Link>

        <Link href={postsharinglinks.twitter}>
          <div>
            <AiFillTwitterCircle />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PostSocialShare;
