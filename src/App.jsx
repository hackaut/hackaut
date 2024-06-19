import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar2 from "./Components/navBar2";
import RegForm from "./Components/reg";
import Alumni from "./Components/alumni/Alumni";
import About from "./Components/about";
import { Hero } from "./Components/hero";
import Error from "./Components/Error";
import HomeContent from "./Components/HomeContent";
import { Feature } from "./Components/features";
import Footer2 from "./Components/Footer2";
import Form  from "./Components/Form";
import Loader from "./Components/Loader/Loader";
import { Teams } from "./Components/Teams/Teams";
import { Gallery } from "./Components/Gallery/Gallery";

function App() {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="sticky top-0 z-50">
                <NavBar2 nav={nav} setNav={setNav} />
              </div>
              <Hero />
              <Feature />
              <HomeContent />
              <Footer2 />
            </>
          )}
        </>
      ),
    },
    {
      path: "about",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <About />
          <Footer2 />
        </>
      ),
    },
    {
      path: "reg",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <RegForm />
          <Footer2 />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Form />
          <Footer2 />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Error />
          <Footer2 />
        </>
      ),
    },
    {
      path: "team",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Teams />
          <Footer2 />
        </>
      ),
    },
    {

      path: "alumni",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Alumni />
          <Footer2 />
        </>
      ),
    },
    {
      path: "gallery",
      element: (
        <>
          <NavBar2 nav={nav} setNav={setNav} />
          <Gallery />
          <Footer2 />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
