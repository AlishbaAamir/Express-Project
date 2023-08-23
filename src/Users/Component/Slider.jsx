import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function slider() {
  return (
    <div className='py-1 width-100%'>
    <Carousel slide={false}>
    <Carousel.Item>
      <img className="d-block w-100 "
        src="https://img.freepik.com/premium-photo/buffet-table-scene-take-out-delivery-foods-pizza-hamburgers-fried-chicken-sides_914391-4473.jpg?w=2000"
        alt="First slide" style={{height:'450px'}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://us.123rf.com/450wm/altitudevisual/altitudevisual2304/altitudevisual230417938/201835456-fast-food-feast-with-variety-of-dishes-including-burgers-pizza-and-sushi-created-with-generative.jpg?ver=6"
        alt="Second slide" style={{height:'450px'}} />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://tb-static.uber.com/prod/image-proc/processed_images/a7fd869a405fff78c764cffb1cacd033/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        alt="Third slide" style={{height:'450px'}}/>

      
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default slider