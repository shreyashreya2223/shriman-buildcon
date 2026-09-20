"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  src: string;
  name: string;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch("/api/gallery");

        if (!response.ok) {
          throw new Error("Failed to load gallery");
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Gallery loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || images.length === 0) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null || images.length === 0) return;

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <>
      <section className="bg-[#F6F8FB] px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1500px]">

          {/* HEADER */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#114FA7] sm:mb-3 sm:text-xs">
              Gallery
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#081B33] sm:text-4xl lg:text-5xl">
              Our Work Gallery
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#081B33]/60 sm:mt-4 sm:text-base sm:leading-7">
              A selection of construction and finishing work by Shriman
              Buildcon.
            </p>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square animate-pulse bg-[#E7EBF1] sm:aspect-[4/3]"
                />
              ))}
            </div>
          )}

          {/* EMPTY */}
          {!loading && images.length === 0 && (
            <div className="border border-[#081B33]/10 bg-white px-5 py-12 text-center sm:px-6 sm:py-16">
              <p className="text-base font-semibold text-[#081B33] sm:text-lg">
                No gallery images found.
              </p>

              <p className="mt-2 text-xs text-[#081B33]/50 sm:text-sm">
                Add images to the public/gallery folder.
              </p>
            </div>
          )}

          {/* GALLERY GRID */}
          {!loading && images.length > 0 && (
            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-2
                sm:gap-5
                lg:grid-cols-3
              "
            >
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white
                    text-left
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      relative
                      aspect-square
                      overflow-hidden
                      sm:aspect-[4/3]
                    "
                  >
                    <Image
                      src={image.src}
                      alt={image.name || "Shriman Buildcon project work"}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                      sizes="
                        (max-width: 640px) 50vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                    />

                    {/* DARK HOVER */}
                    <div className="absolute inset-0 bg-[#081B33]/0 transition-all duration-300 group-hover:bg-[#081B33]/30" />

                    {/* VIEW IMAGE */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#081B33]/90 px-5 py-4 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B400]">
                        Shriman Buildcon
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        View Project Image
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedIndex !== null && images[selectedIndex] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050B14]/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition-all
              duration-300
              hover:bg-[#F4B400]
              hover:text-[#081B33]
              sm:right-5
              sm:top-5
              sm:h-11
              sm:w-11
            "
          >
            <X size={22} />
          </button>

          {/* PREVIOUS */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-3
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition-all
                duration-300
                hover:bg-[#F4B400]
                hover:text-[#081B33]
                sm:left-8
                sm:h-11
                sm:w-11
              "
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* IMAGE */}
          <div
            className="relative h-[78vh] w-full max-w-6xl sm:h-[82vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].name || "Shriman Buildcon project"}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* NEXT */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="
                absolute
                right-3
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition-all
                duration-300
                hover:bg-[#F4B400]
                hover:text-[#081B33]
                sm:right-8
                sm:h-11
                sm:w-11
              "
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* IMAGE COUNTER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur sm:bottom-5">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}