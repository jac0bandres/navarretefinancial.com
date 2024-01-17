import SelectionText from "../../components/SelectionText/SelectionText";

function ServiceCard(props : any) {
  return (
    <>
      <div className="flex flex-col items-center h-screen w-full">
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

  return (
    <>
      <div className="fixed top-0 w-screen h-screen overflow-hidden -z-10">
        <div className="flex absolute w-screen h-screen skew-x-12  -translate-x-40 -z-10 bg-white" />
        <div className="absolute w-4/5 -translate-x-30 h-screen skew-x-12 -z-10 bg-teal-900" />
        <div className="absolute w-4/5 translate-x-80 h-screen skew-x-12 -z-10 bg-teal-700" />
      </div>
      <div className="w-screen">
        <div className="flex items-center w-screen h-1/3 bg-transparent">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex justify-center text-7xl  font-mundial text-white mt-12 md:mt-0 w-full lg:w-1/2">
              <div className="flex flex-col">
                <h1 className="mt-24">Servicios</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center h-2/3 w-full">
          <ServiceCard title="Contabilidad" image="bookkeeping.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Bookkeeping and Tax</h1>
              <h1>Revisiones Financieras</h1>
              <h1>Compilaciones</h1>
              <h1>Servicios de Director Financiero</h1>
              <h1>Profit and Loss Reports</h1>
            </div>
          </ServiceCard>
          <ServiceCard title="Impuestos" image="taxes.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Planificación fiscal</h1>
              <h1>Devoluciones individuales</h1>
              <h1>Devoluciones corporativas</h1>
              <h1>Organizaciones fiduciarias y exentas</h1>
              <h1>Resoluciones de avisos del IRS</h1>
            </div>
          </ServiceCard>
          <ServiceCard title="Multiservicios" image="focus.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Prestamos para:</h1>
              <h1>Edificios Comerciales</h1>
              <h1>Propiedad Raiz</h1>
              <h1>Servicios para Emprendimiento</h1>
              <h1>Revision de Contratos Financieros</h1>
              <h1>Diseñador de sitios web</h1>
            </div>
          </ServiceCard>
        </div>
      </div>
    </>
  );
}
