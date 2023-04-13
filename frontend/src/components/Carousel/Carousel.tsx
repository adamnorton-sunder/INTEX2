import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

interface Item {
  imageSrc: string;
  imageAlt: string;
}

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items: Item[] = [
    {
      imageSrc: "/IntexSiteMap.jpg",
      imageAlt: "The Site Map",
    },
    {
      imageSrc: "/IntexMummyGrave.jpg",
      imageAlt: "A few Mummies in Grave",
    },
    {
      imageSrc: "/IntexArtifacts.jpg",
      imageAlt: "Ancient Artifacts",
    },
    {
      imageSrc: "/IntexGroundLayers.jpg",
      imageAlt: "Ground Layer Mummies",
    },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
