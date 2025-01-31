import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Start, StarsCanvas, Calendar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <div className='bg-center bg-no-repeat bg-cover '>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Start /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        {/* <Calendar /> */}
        {/* <Feedbacks /> */}
        {/* <div className='relative z-0'> */}
          <Contact />
          {/* <StarsCanvas /> */}
        {/* </div> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
