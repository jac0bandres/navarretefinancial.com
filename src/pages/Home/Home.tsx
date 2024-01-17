import { Link } from "react-router-dom";
import SelectionText from "../../components/SelectionText/SelectionText";
import RandomWord from "../../components/RandomWord/RandomWord";

const esIcons = [
  ["calculator", "Contabilidad"],
  ["home", "Aseguranza"],
  ["address-book", "Bookkeeping"],
  ["laptop-code", "Diseño de Web"],
  ["user-circle", "Devoluciones Individuales"],
  ["briefcase", "Devoluciones Corporativas"],
  ["money-bill", "Planificación Fiscal"]
];

export default function Home() {
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
              <RandomWord
                icons={esIcons}
                fadeTime={400}
                delay={4000}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-1/3 w-screen">
          <div className="flex overflow-hidden items-center justify-center w-screen md:w-auto h-1/4 flex-row bg-white rounded-full">
            <SelectionText>
              <Link className="text-white font-sans text-xl px-8" to="/acerca">
                Acerca
              </Link>
            </SelectionText>
            <SelectionText>
              <Link
                className="text-white font-sans text-xl px-8"
                to="/servicios"
              >
                Servicios
              </Link>
            </SelectionText>
            <SelectionText>
              <Link
                className="text-white font-sans text-xl px-8"
                to="/contacto"
              >
                Contacto
              </Link>
            </SelectionText>
          </div>
        </div>
      </div>
    </>
  );
}
