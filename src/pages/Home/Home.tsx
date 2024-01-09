import { Link } from 'react-router-dom'
import SelectionText from "../../components/SelectionText/SelectionText";
import RandomWord from '../../components/RandomWord/RandomWord';


export default function Home() {
  const services = [
    ["calculator", "Accounting"],
    ["chart-pie", "Tax planning"],
    ["home", "Insurance"],
    ["file-alt", "Bookkeeping"],
    ["laptop-code", "Websites"],
    ["clipboard", "Advising"],
  ];
  return (
    <>
      <div className="flex absolute w-screen justify-center -z-10 bg-black">
        <video
          className="lg:w-screen h-screen object-cover pointer-events-none brightness-50"
          autoPlay
          muted
          loop
        >
          <source src="banner-video.mp4" />
        </video>
      </div>
      <div className="h-screen">
        <div className="flex items-center w-screen h-2/3 bg-transparent">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex justify-center text-7xl  font-mundial text-white mt-12 md:mt-0 w-full lg:w-1/2">
              <div className="flex flex-col">
                <h1>NAVARRETE</h1>
                <h1>FINANCIAL</h1>
              </div>
            </div>
            <div className="flex justify-center items-center mt-24 lg:mt-0 w-full lg:w-1/2">
              <RandomWord icons={services} fadeTime={400} delay={4000} />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-1/3 w-full">
          <div className="flex items-center justify-between h-1/4 flex-row bg-white rounded-full">
            <SelectionText>
              <Link className="text-white font-sans text-xl px-8" to="/about">
                About
              </Link>
            </SelectionText>
            <SelectionText>
              <Link className="text-white font-sans text-xl px-8" to="/services">
                Services
              </Link>
            </SelectionText>
            <SelectionText>
              <Link className="text-white font-sans text-xl px-8" to="/contact">
                Contact
              </Link>
            </SelectionText>
          </div>
        </div>
      </div>
    </>
  );
}
