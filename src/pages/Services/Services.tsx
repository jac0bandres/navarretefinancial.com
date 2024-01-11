import SelectionText from "../../components/SelectionText/SelectionText";
import { useContext } from "react";
import en from "./en.json"
import es from "./es.json"
import { LanguageContext } from "../../components/LanguageContext/LanguageContext";
import Histogram from "../../components/Histogram/Histogram";

const langs = {
  "es": es,
  "en": en,
}

function ServiceCard(props) {
  return (
    <>
      <div className="flex flex-col items-center h-full w-full">
        <h1 className="w-full text-center my-5 text-white font-mundial text-3xl">
          {props.title}
        </h1>
        <div className="flex flex-col w-64 h-64">
          <SelectionText>
            <div className="w-full h-full p-2">
              <div className="flex flex-col w-full h-full rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={props.image}
                />
              </div>
            </div>
          </SelectionText>
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default function Services() {

  const { language } = useContext(LanguageContext)
  const lang = langs[language]

  return (
    <>
      <div className="w-screen h-screen overflow-hidden absolute -z-10">
        <div className="flex absolute w-screen h-screen skew-x-12  -translate-x-40 -z-10 bg-white" />
        <div className="absolute w-4/5 -translate-x-30 h-screen skew-x-12 -z-10 bg-teal-900" />
        <div className="absolute w-4/5 translate-x-80 h-screen skew-x-12 -z-10 bg-teal-700" />
      </div>
      <div className="w-screen">
        <div className="flex items-center w-screen h-1/3 bg-transparent">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex justify-center text-7xl  font-mundial text-white mt-12 md:mt-0 w-full lg:w-1/2">
              <div className="flex flex-col">
                <h1 className="mt-24">{lang.services}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center h-2/3 w-full">
          <ServiceCard title={lang.accounting} image="bookkeeping.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>{lang.qb}</h1>
              <h1>{lang.bk}</h1>
              <h1>{lang.rev}</h1>
              <h1>{lang.comp}</h1>
              <h1>{lang.cfo}</h1>
            </div>
          </ServiceCard>
          <ServiceCard title={lang.taxes} image="taxes.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>{lang.tp}</h1>
              <h1>{lang.ir}</h1>
              <h1>{lang.cr}</h1>
              <h1>{lang.teo}</h1>
              <h1>{lang.inr}</h1>
            </div>
          </ServiceCard>
          <ServiceCard title="Areas of Focus" image="focus.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Real Estate</h1>
              <h1>Software & IT Dev</h1>
              <h1>Manufacturing</h1>
              <h1>Start-Ups</h1>
              <h1>International Companies</h1>
            </div>
          </ServiceCard>
        </div>
      </div>
      <div className="w-full flex-col bg-white py-10 px-10 mt-36 ">
        <div className="flex flex-col md:flex-row h-2/3 w-full mt-24">
          <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
            <h1 className="text-black text-5xl text-start font-mundial">{lang.section2}</h1>
            <p className="text-black text-xl text-start font-mundial py-5 px-8">
              Te orientamos, guiamos y gestionamos tus proyectos comerciales y residenciales hasta que obtengas todos los permisos y licencias necesarias para operar.

              Contamos con un equipo de profesionales totalmente capacitados, para llevar tu proyecto comercial al siguiente nivel, bien sea abrir otra sucursal, remodelación, entre otros
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Histogram />
          </div>
        </div>

      </div>
    </>
  );
}
