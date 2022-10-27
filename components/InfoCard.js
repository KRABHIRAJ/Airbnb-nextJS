import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image"

function InfoCard({ description, img, lat, long, location, price, star, title, total }) {
  return (
    <div className="m-5 p-3 lg:shadow-lg flex flex-col lg:flex-row lg:gap-x-4 "> 

          <div className="flex mx-auto lg:mx-0 relative h-[300px] w-[350px] lg:h-[200px] lg:w-[250px]">
          <Image
              className="flex absolute rounded-xl"
              loader={() => img}
              src={img}
              layout="fill"
              alt="img"
              />
            </div>
          <div className="mt-7 py-5 lg:py-0 lg:mt-0 px-10 shadow-lg lg:shadow-none h-48 lg:h-auto flex flex-col justify-between">
              <div className="flex justify-between">
                  <div>
                        <p className="text-sm text-gray-500">{location}</p>
                        <h1 className=" text-lg font-semibold">{title}</h1>
                        <p className="text-sm mb-2  text-gray-500 ">{description}</p>
                  </div>
                  <HeartIcon className="h-5 cursor-pointer active:text-airbnb transition-all " />
              </div>
              <div className="flex justify-between">
                  <div >
                      <p className="text-sm text-gray-500">⭐ { star }</p>
                  </div>
                  <div>
                      <h1 className="text-lg font-bold" >{price}</h1>
                      <p className="text-sm text-gray-500">{ total }</p>
                  </div>
              </div>
              <div>
                  
              </div>
          </div>
    </div>
  )
}

export default InfoCard;
