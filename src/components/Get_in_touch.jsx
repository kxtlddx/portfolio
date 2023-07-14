import React from "react";
import Background from "../assets/Background.svg";
import Person from "../assets/Person.svg";
import Plane from "../assets/Plane.svg";
import Error from "../assets/Error.svg"

const Get_in_touch = () => {
  return (
    <div
      class="w-[320px] desktop:w-[1280px] tablet:w-[792px] h-[753px]
      desktop:h-[708px] tablet:h-[708px] flex items-center justify-center mx-auto"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="form bg-white py-12 px-[21px] desktop:px-12 tablet:px-9 rounded-lg">
        <h2 class="text-xl font-semibold desktop:text-[32px] tablet:text-[32px] mb-4">Let's discuss your project</h2>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col tablet:flex-row desktop:flex-row justify-between">
            <div class="flex flex-col gap-2">
              <label htmlFor="name" className="subtitle2 text-black">
                Your full name <span className="text-red">*</span>
              </label>
              <div className="input pl-5 h-[55px] w-[268px] desktop:w-[324px] tablet:w-[312px] gap-[10px]">
                <img src={Person} alt="Person image" class="w-6 h-6"/>
                <input
                  id="name"
                  type="text"
                  placeholder="Name Surname"
                  class="text-grey-dark text-base font-normal outline-none"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label htmlFor="name" className="subtitle2 text-black">
              Your email <span className="text-red">*</span>
              </label>
              <div className="email pl-5 h-[55px] w-[268px] desktop:w-[324px] tablet:w-[312px] gap-[10px]">
                <img src={Error} alt="Error image" class="w-6 h-6"/>
                <input
                  id="mail"
                  type="text"
                  placeholder="name@example.com"
                  class="text-grey-dark text-base font-normal outline-none"
                />
              </div>
              <p className=" text-red">Please fill the mandatory field</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label htmlFor="project" className="subtitle2 text-black">
              Tell me about your project
            </label>
            <div className="input w-full h-[122px] px-5 gap-[10px]">
              <textarea
                id="project"
                placeholder="Add here a general description of your idea and target aim"
                class="text-grey-dark text-base font-normal outline-none resize-none w-full h-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="submit mt-[48px] flex items-center"
          >
            <p
              class={
                "text-base font-semibold mr-[10px]"
              }
            >
              Submit
            </p>
            <img
              src={Plane}
              alt="Plane image"
              class="w-6 h-6"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Get_in_touch;