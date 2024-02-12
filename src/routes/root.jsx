import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";


export default function Root() {
  return (
      <>
        <div className="flex flex-col justify-evenly min-h-screen">
          <Navbar/>
          <div className="mb-auto">
            <Outlet/>
          </div>
          <Footer/>
        </div>
      </>
    );
  }