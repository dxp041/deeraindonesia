import CatalogSlide from "../components/CatalogSlide";
import { catalogMock } from "../data/mock";

export default function Catalog() {
  return (
    <main className="w-full min-h-screen bg-black snap-y snap-mandatory overflow-y-scroll h-screen">
      {catalogMock.map((model, index) => (
        <CatalogSlide
          key={model.kode}
          model={model}
          isLast={index === catalogMock.length - 1}
        />
      ))}
    </main>
  );
}
