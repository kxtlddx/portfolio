import React from 'react'
import Plane from '../assets/Plane.svg'
import Photo2_desktop from '../assets/Photo2_desktop.svg';
import Photo2_tablet from '../assets/Photo2_tablet.svg';
import Photo2_mobile from '../assets/Photo2_mobile.svg';
import Music from '../assets/Music.svg'
import Brush from '../assets/Brush.svg'
import Photo from '../assets/Photo.svg'

const About = () => {
  return (
    <div className='about space-y-12 desktop:space-y-20 tablet:space-y-16'>
      <h2 className="h2 text-black">About</h2>
      <div class="w-full flex space-y-9 justify-between flex-col desktop:flex-row tablet:flex-row"> 
      <div>
    <picture>
    <source media="(min-width: 1280px)" srcSet={Photo2_desktop} />
    <source media="(min-width: 792px)" srcSet={Photo2_tablet} />
    <img src={Photo2_mobile} alt="Men" />
  </picture>
      </div>
        <div class="flex flex-col">
          <div class="mb-6 w-[25px] h-[3px] bg-lavender "></div>
          <p className="description w-[290px] tablet:w-[380px] desktop:w-[447px] text-grey-dark inline-block">
              <span className="text-black font-semibold">Nick Richardson</span> - specialist in Frontend
            development. Clear code is my passion. <br /> Solving issues through
            negotiations.
          </p>
          <div className='get_in_touch mt-12 desktop:mt-16 tablet:mt-11 hidden desktop:flex tablet:flex'>
            <p class="text-white text-base font-semibold">Get in touch</p>
            <img src={Plane} alt="Plane image" class=" w-4 h-4 desktop:w-6 tablet:w-6 desktop:6-6 tablet:h-6" />
          </div>
          </div>
      </div>
      <div class=" flex flex-col gap-12 tablet:gap-16 desktop:flex-row w-full">
        <div class="flex flex-col w-[353px] space-y-6 desktop:space-y-11 tablet:space-y-11" >
        <p className="h3 pb-[3px] desktop:pb-0 tablet:pb-0">Interests</p>
          <div class="flex flex-row gap-4 desktop:gap-8 tablet:gap-8">
            <div className='circle'>
              <img src={Music} alt="Music image" class="w-[17.6px] h-[17.6px] desktop:w-6 desktop:h-6 tablet:w-6 tablet:h-6" />
            </div>
            <div class="flex flex-col gap-2">
              <p className="text-sm font-semibold desktop:text-xl tablet:text-xl">Music</p>
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Indie rock | Reggae</p>
            </div>
          </div>
          <div class="flex flex-row gap-4 desktop:gap-8 tablet:gap-8">
            <div className='circle'>
              <img src={Brush} alt="Brush image" class="w-[17.6px] h-[17.6px] desktop:w-6 desktop:h-6 tablet:w-6 tablet:h-6" />
            </div>
            <div class="flex flex-col gap-2">
              <p className="text-sm font-semibold desktop:text-xl tablet:text-xl">Art</p>
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Edvard Munch | Frida Kahlo</p>
            </div>
          </div>
          <div class="flex flex-row gap-4 desktop:gap-8 tablet:gap-8">
            <div className='circle'>
              <img src={Photo} alt="Photo image" class="w-[17.6px] h-[17.6px] desktop:w-6 desktop:h-6 tablet:w-6 tablet:h-6" />
            </div>
            <div class="flex flex-col gap-2">
              <p className="text-sm font-semibold desktop:text-xl tablet:text-xl" >Photography</p>
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Portraits</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-[290px] tablet:w-[714px] desktop:w-[540]" >
          <p className='h3 pb-7 desktop:pb-[44px] tablet:pb-[44px]'>Education & Experience</p>
          <div class="space-y-3">
            <div class="flex flex-row h-[83px] desktop:h-[100px] tablet:h-[100px] gap-4 items-start border-b border-solid border-grey-light">
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl w-[120px] desktop:w-[152px] tablet-[152px]">2008-Present</p>
              <div class="flex flex-col gap-2">
                <p className="text-sm font-semibold desktop:text-xl tablet:text-xl">Middle Frontend developer</p>
                <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Ozon</p>
              </div>
            </div>
            <div class="flex flex-row h-[83px] desktop:h-[100px] tablet:h-[100px] gap-4 items-start border-b border-solid border-grey-light">
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl w-[120px] desktop:w-[152px] tablet-[152px]">2006-2007</p>
              <div class="flex flex-col gap-2">
                <p className="text-sm font-semibold desktop:text-xl tablet:text-xl">Frontend development courses</p>
                <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Stepik</p>
              </div>
            </div>
            <div class="flex flex-row h-[83px] desktop:h-[100px] tablet:h-[100px] gap-4 items-start">
              <p className="text-sm font-normal desktop:text-xl tablet:text-xl w-[120px] desktop:w-[152px] tablet-[152px]">2000-2005</p>
              <div class="flex flex-col gap-2">
                <p className="text-sm font-semibold desktop:text-xl tablet:text-xl">Frontend developer</p>
                <p className="text-sm font-normal desktop:text-xl tablet:text-xl">Saint Petersburg State University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='get_in_touch desktop:hidden tablet:hidden'>
            <p class="text-white text-base font-semibold">Get in touch</p>
            <img src={Plane} alt="Plane image" class=" w-4 h-4 desktop:w-6 tablet:w-6 desktop:6-6 tablet:h-6" />
          </div>
    </div>
  )
}

export default About