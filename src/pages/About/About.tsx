import SelectionText from "../../components/SelectionText/SelectionText";

export default function About() {
  return (
    <>
      <div className="w-2/5 h-2/5 bg-teal-500 absolute -z-10 translate-y-80 -translate-x-5 rounded-2xl" />
      <div className="w-3/5 h-3/5 bg-teal-800 absolute -z-20 translate-y-12 rounded-2xl" />
      <div className="flex h-screen w-screen items-center justify-center mt-56 lg:mt-0">
      <div className="flex flex-row lg:flex-row items-center justify-center md:pb-12 w-full bg-white rounded-3xl">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center">
          <div className="w-full lg:w-1/2 px-10 md:px-24 text-left mt-12">
            <h1 className="text-4xl font-sans">
              About Navarrete Financial: Who We Are
            </h1>
            <p>
              24 años de servicios financieros al publico, empresas y familias
              en Georgia y Florida. Experiencia en préstamos comerciales,
              Hipotecas para la compra de casas, refinanciamento, y prestamos de
              automoviles, equipos. Análisis financiero, informes y contabilidad
              para pequeñas empresas. Asesoramiento y revisión de contratos de
              compra para sus objetivos de emprendimiento y expansión
              empresarial.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:mr-12 justify-center items-center h-full lg:h-auto w-full lg:w-1/2 bg-gray-200 rounded-t-3xl  md:rounded-2xl mt-12">
            <div className="flex flex-col items-center justify-center py-8 mx-10 rounded-2xl">
              <SelectionText>
                <img
                  className="rounded-full object-top object-cover border-teal-700 border-8 w-28 h-28"
                  src="andy-pfp.png"
                />
              </SelectionText>
              <h1>Andy Navarrete</h1>
              <p>Financial Representative</p>
              <div className="flex flex-row justify-between">
                <i className="las la-phone text-xl"></i>
                <h1>(770) 256-8700</h1>
              </div>
              <div className="flex flex-row justify-between">
                <i className="las la-envelope text-xl"></i>
                <h1>andy@navarretefinancial.com</h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 py-8 mx-10 rounded-2xl">
              <SelectionText>
                <img
                  className="rounded-full object-cover border-teal-700 border-8 w-28 h-28"
                  src="jacob-pfp.jpg"
                />
              </SelectionText>
              <h1>Jacob Navarrete</h1>
              <p>Financial Representative</p>
              <div className="flex flex-row justify-between">
                <i className="las la-phone text-xl"></i>
                <h1>(762) 684-0076</h1>
              </div>
              <div className="flex flex-row justify-between">
                <i className="las la-envelope text-xl"></i>
                <h1>jacob@navarretefinancial.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </>
  );
}
