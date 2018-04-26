import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><img style={{ width: '100%' }} alt="adidas" src="/src/img/adidas.jpg" /><h3>1</h3></div>
      <div><img style={{ width: '100%' }} alt="nike" src="/src/img/nike.jpg" /><h3>2</h3></div>
      <div><img style={{ width: '100%' }} alt="new balance" src="/src/img/new-balance.jpg" /><h3>3</h3></div>
      <div><img style={{ width: '100%' }} alt="karhu" src="/src/img/karhu.jpg" /><h3>4</h3></div>
    </Carousel>
  );
};

export default CarouselComp;
