import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="mx-auto ">
      <Link href="/">
        <a>
          <p className="font-head text-5xl font-bold text-center ">
            <span className="text-logo">भारत पोस्ट</span> न्यूज़
          </p>
        </a>
      </Link>
    </div>
  );
}
