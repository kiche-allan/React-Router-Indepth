import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import Career, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import Careers from "./pages/careers/Careers";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = '/' element = {<RootLayout />}>
    <Route index element ={<Home />}/>
    <Route path = "about" element = {<About />}/>
    
    <Route path = "help" element = {<HelpLayout/>}>
      <Route path = "faq" element = {<Faq/>} />
      <Route path = "contact" element= {<Contact/>}/>
    </Route>

    <Route path = "careers" element = {<CareersLayout />}>
      <Route index element = {<Careers />} loader = {careersLoader}/>
      <Route path = ":id" element = {<CareerDetails/> } loader = {careerDetailsLoader}/>
    </Route>

    <Route path =  "*" element = {<NotFound/>} />
  </Route>
  )
)


function App() {
  return (
    <RouterProvider router = {router} />
    
  );
}

export default App
