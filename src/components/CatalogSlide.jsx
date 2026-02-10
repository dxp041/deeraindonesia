import { useEffect, useRef, useState } from "react";

export default function CatalogSlide({ model, isLast }) {
  const ref = useRef(null);

  const isFirst = model.index === 0;
  const [active, setActive] = useState(isFirst);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.6, rootMargin: "-10% 0px -10% 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen snap-start bg-black overflow-hidden"
    >
      {/* IMAGE */}
      <img
        src={model.image}
        alt={model.nama}
        loading={isFirst ? "eager" : "lazy"}
        fetchpriority={isFirst ? "high" : "auto"}
        decoding="async"
        sizes="100vw"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-[800ms] ease-in-out
          ${active ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* FILM GRAIN */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[url('/noise.webp')]
          opacity-[0.035]
          mix-blend-overlay
        "
      />

      {/* OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full">
        <div
          className="
         bg-gradient-to-t
    from-black/60
    via-black/30
    to-transparent
    px-7
    pt-40
    pb-20
        "
        >
          {/* CODE – PRIMARY */}
          <p
            className="
  font-editorial
  text-white/80
  text-[24px]
  font-medium
  tracking-[0.25em]
"
          >
            {model.kode}
          </p>

          {/* NAME – SECONDARY */}
          <p
            className="
  mt-2
  font-editorial
  text-white/45
  text-xs
  font-light
  tracking-[0.15em]
"
          >
            {model.nama}
          </p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      {!isLast && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <div
            className="
            w-1 h-1
            rounded-full
            bg-white/40
            animate-pulse
          "
          />
        </div>
      )}
    </section>
  );
}
