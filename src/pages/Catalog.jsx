import { useState } from "react";
import CatalogSlide from "../components/CatalogSlide";
import Modal from "../components/Modal";
import { catalogMock } from "../data/mock";

export default function Catalog() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      {/* MAIN CATALOG */}
      <main className="w-full h-screen min-h-screen overflow-y-scroll bg-black snap-y snap-mandatory">
        {catalogMock.map((model, index) => (
          <CatalogSlide
            key={model.kode}
            model={model}
            isLast={index === catalogMock.length - 1}
          />
        ))}
      </main>

      {/* VISIT US BUTTON (FLOATING) */}
      <button
        onClick={() => setOpenModal(true)}
        className="
          fixed
          bottom-6
          right-6
          z-50

          px-5
          py-2

          font-editorial
          text-xs
          tracking-[0.3em]
          text-white/90

          border
          border-white/30
          bg-black/40
          backdrop-blur

          hover:border-white
          transition
        "
      >
        VISIT US
      </button>

      {/* MODAL */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
