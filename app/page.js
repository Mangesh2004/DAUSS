import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
    <GetStarted />
      <div className="gradient-03 z-0" />
      <About/>

    </div>

    <div className="relative">
      {/* <Explore/> */}
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    
    <div className="relative">
    <World />
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
