import { BrowserRouter } from "react-router-dom";

import { About , Contact, Experience, Formation, Projects,Tech, NavBar, Particules, Home, } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 ">
        <Particules/>
        <NavBar/>
        <div className=" relative z-0 bg-cover bg-no-repeat bg-center">
          <Home/>
        </div>
        <div className=" relative z-0">
          <About/>
          <Experience/>
          <Formation/>
          <Tech/>
          <Projects/>
        </div>
        <div className=" relative z-0 ">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;