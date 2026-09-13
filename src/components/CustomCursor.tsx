"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);

      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`construction-cursor ${
        visible ? "construction-cursor-visible" : ""
      } ${isHovering ? "construction-cursor-hover" : ""} ${
        isClicking ? "construction-cursor-click" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {/* Hammer */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hammer head */}
        <path
          d="M17 8H45C48.3 8 51 10.7 51 14V22C51 25.3 48.3 28 45 28H17C13.7 28 11 25.3 11 22V14C11 10.7 13.7 8 17 8Z"
          fill="#114FA7"
        />

        {/* Gold hammer face */}
        <path
          d="M11 14C11 10.7 13.7 8 17 8H24V28H17C13.7 28 11 25.3 11 22V14Z"
          fill="#F4B400"
        />

        {/* Hammer handle */}
        <path
          d="M29 25L38 25L32 55C31.6 57.1 29.6 58.5 27.5 58.1C25.4 57.7 24 55.7 24.4 53.6L29 25Z"
          fill="#0E2748"
        />

        {/* Handle highlight */}
        <path
          d="M29 29L33 29L28.8 52.5"
          stroke="#F4B400"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Small construction accent */}
        <circle
          cx="47"
          cy="18"
          r="2"
          fill="#F4B400"
        />
      </svg>

      {/* Gold interaction ring */}
      <span className="construction-cursor-ring" />
    </div>
  );
}