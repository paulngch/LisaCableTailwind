import React, { useState, useEffect, forwardRef } from 'react';
import mockData from '../../data/mockData';
import Item from './Item';

const ForwardedCarousel = ({ forwardedRef }) => {
  const [data, setData] = useState([]);

  const getData = function() {
    return mockData;
  };

  useEffect(() => {
    let mockData = getData();
    setData(mockData);
  }, []);

  return (
    <section className="carouselContainer" ref={forwardedRef}>
        <div class="flex flex-nowrap scroll-smooth overflow-scroll max-h-[200px]">
      {data.map((item, index) => (
        <Item key={index} details={item} />
      ))}
      </div>
    </section>
  );
};

const Carousel = forwardRef((props, ref) => {
  return <ForwardedCarousel {...props} forwardedRef={ref} />;
});

export default Carousel;
