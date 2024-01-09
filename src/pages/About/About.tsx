import SelectionText from "../../components/SelectionText/SelectionText";

export default function About() {
  return (
    <>
      <div className="w-2/5 h-2/5 bg-teal-500 absolute -z-10 translate-y-80 -translate-x-5 rounded-2xl" />
      <div className="w-3/5 h-3/5 bg-teal-800 absolute -z-20 translate-y-12 rounded-2xl" />
      <div className="flex justify-center items-center h-1/3 w-screen"></div>
      <div className="flex flex-col lg:flex-row justify-center w-full bg-white mt-36">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center my-12">
          <div className="w-1/2">
            <h1 className="text-4xl font-sans">
              About Navarrete Financial: Who We Are
            </h1>
            <p>
              We have a long history of protecting people. And we work together
              to help you and your family achieve financial freedom. We’re more
              than an insurance company - COUNTRY Financial clients not only
              trust us with insuring their homes, cars, farms, businesses, and
              lives, but also to help them plan for the future with investing,
              retirement and financial planning.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 py-8">
          <img
            className="w-auto lg:w-4/5 h-1/3 lg:h-auto object-cover shadow-xl"
            src="building.jpg"
          ></img>
        </div>
      </div>
      <div className="flex justify-center w-full bg-stone-200">
        <div className="flex flex-col items-center justify-center w-4/5 lg:flex-row py-10 mt-10">
          <div className="flex flex-col items-center justify-center w-1/2 bg-white py-8 mx-10 rounded-2xl">
            <SelectionText>
            <img
              className="rounded-full border-teal-700 border-8 w-28 h-28"
              src=""
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
          <div className="flex flex-col items-center justify-center w-1/2 bg-white py-8 mx-10 rounded-2xl">
            <SelectionText>
            <img
              className="rounded-full border-teal-700 border-8 w-28 h-28"
              src=""
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
    </>
  );
}
