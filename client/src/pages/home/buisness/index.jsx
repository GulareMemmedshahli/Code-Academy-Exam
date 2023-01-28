import React from 'react'
import "./index.scss"
import { Carousel } from 'antd';
const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'cover',
};
const Buisness = () => {

  return (
    <div className='carousel'>
<Carousel autoplay>
<div>
  <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg" alt="" /></h3>
  <h1>We help to grow <br /> your business</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
  <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg" alt="" /></h3>
  <h1>We help to grow <br /> your business</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
  <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg" alt="" /></h3>
  <h1>We help to grow <br /> your business</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
</Carousel>

</div>
  )
}

export default Buisness