import React from "react";
import { SwiperItemType } from "../../types";
import SwiperItem from "./SwiperItemOne";

import "./Swiper.css";

// exported so we can use later in tests
export type Props = {
  items: Array<SwiperItemType>;
};

function Swiper({ items }: Props) {
  return (
    <div className="swiper-container">
      <ul className="swiper-list">
        {items.map((item, idx) => (
          <SwiperItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Swiper;
