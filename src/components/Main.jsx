import React from 'react';
import Plane from '../assets/Plane.svg';
import Photo1_desktop from '../assets/Photo1_desktop.svg';
import Photo1_tablet from '../assets/Photo1_tablet.svg';
import Photo1_mobile from '../assets/Photo1_mobile.svg';

const Main = () => {
  return (
    <div className='main'>
      <div>
        <div className='title'>
          <h1 class='h1 text-black'>Hey, I'm Nick</h1>
          <p className='description text-grey-dark'>Frontend-developer</p>
        </div>
        <div class='pt-[38px] desktop:pt-[92px] tablet:pt-[36px] space-y-6'>
          <div class='w-[25px] h-[3px] bg-lavender'> </div>
          <p className='description text-grey-dark w-[290px] desktop:w-[445px] tablet:w-[445px]'>
            Help you to create high-quality digital <br />
            products that your clients will love and let <br />
            your business thrive{' '}
          </p>
        </div>
        <div className='get_in_touch mt-[27px] desktop:mt-[60px] tablet:mt-[44px]'>
          <p>Get in touch</p>
          <img src={Plane} alt='Plane image' />
        </div>
      </div>
      <div class="absolute pt-[218.64px] desktop:pt-[19px] tablet:pt-[24px] bottom-0 right-0">
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
