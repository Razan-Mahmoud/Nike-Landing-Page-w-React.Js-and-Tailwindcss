import Nav from "./Components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

const App = () => (
  <main className="relative">
   <Nav/>
    <section className="xl:padding-l padding-b wide:padding-r">
      <Hero/>
    </section>
    <section className="padding">
     <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
     <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer/>
    </section>
  </main>
)
export default App;
// I've arrived at 01:44 from video on 2-1-2025