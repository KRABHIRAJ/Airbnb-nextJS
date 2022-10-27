import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import Footer from "../components/Footer";
import infoCards from "../data/infoCards";
import Image from "next/image";
import InfoCard from "../components/InfoCard";

function search({searchResults}) {
  const router = useRouter();
  const { endDate, location, startDate, passanger } = router.query;
  const placeholder = `${location} | ${passanger} guests`
  console.log(searchResults);
  return (
    <div className="">
          <Navbar placeholder = {placeholder} />
          <p className="text-sm text-gray-500 pt-8 pl-11">269+ stays avilable for {passanger} guests</p>
          <h2 className="text-2xl font-semibold pl-11 mt-2 pb-2 border-b-2 ">Stays in {location}</h2>
          <div>
        {infoCards.map(({ description, img, lat, long, location, price, star, title, total }) => {
          
          return <InfoCard key={ description} description={description} img={img} lat={lat} long={long} location={location} price={price} star={star} title={title} total={total} />

          })}
            
          </div>
          <Footer />
    </div>
  )
}

export default search


