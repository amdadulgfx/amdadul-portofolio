"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades + slides elements marked with `data-reveal` into view as you scroll.
// Optional stagger: style={{ "--d": "120ms" }}. Honors prefers-reduced-motion via CSS.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    (window as unknown as { __reveal?: boolean }).__reveal = true;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
