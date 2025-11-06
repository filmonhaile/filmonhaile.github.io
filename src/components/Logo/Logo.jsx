import React from "react";

/**
 * Minimal, crisp logo for Filmon Haile
 * Props: size (number, px)
 */
export default function Logo({ size = 28 }) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Filmon Haile Logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded square background */}
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#64FFDA" />
      {/* Monogram FH */}
      <path
        d="M18 22h16v6H24v6h8v6h-8v8h-6V22zm30 0v20h-6v-7h-8v-6h8v-7h6z"
        fill="#0A192F"
      />
    </svg>
  );
}
