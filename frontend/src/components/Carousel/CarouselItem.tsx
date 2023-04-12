import React from "react";

interface CarouselItemProps {
  item: {
    imageSrc: string;
    imageAlt: string;
  };
  width?: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  width,
}: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={item.imageSrc} alt={item.imageAlt} />
      <div className="carousel-item-text">{item.imageAlt}</div>
    </div>
  );
};
