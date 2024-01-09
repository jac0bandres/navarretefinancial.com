import SelectionText from "../../components/SelectionText/SelectionText";

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
  return (
    <>
        <div className="flex absolute w-screen h-screen skew-x-12  -translate-x-40 -z-10 bg-white" />
        <div className="absolute w-4/5 -translate-x-30 h-screen skew-x-12 -z-10 bg-teal-900" />
        <div className="absolute w-4/5 translate-x-80 h-screen skew-x-12 -z-10 bg-teal-700" />
      <div className="h-screen">
        <div className="flex items-center w-screen h-1/3 bg-transparent">
          <div className="flex flex-col lg:flex-row justify-center w-full">
            <div className="flex justify-center text-7xl  font-mundial text-white mt-12 md:mt-0 w-full lg:w-1/2">
              <div className="flex flex-col">
                <h1>Services</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center h-2/3 w-full">
          <ServiceCard title="Accounting" image="bookkeeping.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Quickbooks Assistance</h1>
              <h1>Bookkeeping</h1>
              <h1>Reviews</h1>
              <h1>Compilations</h1>
              <h1>CFO Services</h1>
            </div>
          </ServiceCard>
          <ServiceCard title="Taxes" image="taxes.jpg">
            <div className="text-white font-mundial text-2xl text-center">
              <h1>Tax Planning</h1>
              <h1>Individual Returns</h1>
              <h1>Corporate Returns</h1>
              <h1>Trust & Exempt Organizations</h1>
              <h1>IRS Notice Resolution</h1>
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
    </>
  );
}
