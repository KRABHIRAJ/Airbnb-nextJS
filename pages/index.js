import Banner from '../components/Banner'
import Footer from '../components/Footer';
import LargeCard from '../components/LargeCard';
import MediumCards from '../components/MediumCards';
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard';
import mediumCards from '../data/mediumCards';
import exploreData from "../data/smallCards";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Banner />

      <div className='max-w-5xl mx-auto p-6'>
        <h2 className='font-bold text-xl'>Explore Nearby</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-7 mt-5' >
          {exploreData?.map((item) => {
            return <SmallCard 
              distance={item.distance}
              img={item.img}
              location={item.location}
            />
          })}

          </div>

        <h2 className='font-bold text-2xl mt-5'>Live Anywhere</h2>
        <div className=' flex space-x-3 lg:space-x-4 xl:space-x-5 my-4 mt-8'>
            {mediumCards.map((data) => {
              return <MediumCards
                img={data.img} 
                title={data.title}
                
              />
          })}
        </div>

        <LargeCard
          img="/images/largeCard.webp"
          title="The Greatest Outdoors"
          desc="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />

        <Footer />
        
      </div>
    </div>
  )
}


// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp")
//     .then((res) => res.json())
  
//   return {
//     props: {
//       exploreData
//     }
//   }
// }