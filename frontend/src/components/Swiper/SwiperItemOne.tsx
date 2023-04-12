import React from "react";
import { SwiperItemType } from "../../types";

import "./SwiperItem.css";

// exported so we can use later in tests
export type Props = SwiperItemType;

function SwiperItem({ imageSrc, imageAlt }: Props) {
  return (
    <li className="swiper-item">
      <img src={imageSrc} alt={imageAlt} className="swiper-img" />
    </li>
  );
}

export default SwiperItem;
