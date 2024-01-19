import React from 'react';
import Plane from '../assets/airplane.svg';
import Photo1_desktop from '../assets/photo1_desktop.svg';
import Photo1_tablet from '../assets/photo1_tablet.svg';
import Photo1_mobile from '../assets/photo1_mobile.svg';

const Main = () => {
  return (
    <div className='main'>
      <div class="h-fit">
        <div className='title'>
          <h1 class='h1'>Hey, I'm Nick</h1>
          <p className='body_text text-grey-dark'>Frontend-developer</p>
        </div>
        <div class='description'>
          <div class='w-[25px] h-[3px] bg-lavender'> </div>
          <p className='body_text text-grey-dark'>
            Help you to create high-quality digital 
            products that your clients will love
            and let your business thrive
          </p>
        </div>
        <div className='get_in_touch mt-[27px] desktop:mt-[60px] tablet:mt-[44px]'>
          <p className='subtitle2 text-white'>Get in touch</p>
          <img src={Plane} alt='Plane' />
        </div>
      </div>
      <div class="absolute bottom-16 right-0">
    <picture>
    <source media="(min-width: 1280px)" srcSet={Photo1_desktop} />
    <source media="(min-width: 792px)" srcSet={Photo1_tablet} />
    <img src={Photo1_mobile} alt="Men" />
  </picture>
      </div>
    </div>
  );
};

export default Main;
