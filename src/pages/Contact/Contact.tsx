import "./Contact.css";
import RandomWord from "../../components/RandomWord/RandomWord";

const icons = [
  ["phone", "(770) 532-7374"],
  ["envelope", "help@navarretefinancial.com"],
];

export default function Contact() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen px-10 justify-center items-center">
        <div className="flex flex-col h-3/4">
          <RandomWord icons={icons} />
        <div className="flex justify-center flex-row w-screen">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdweVaIPNNj5GTN4UQnmSGqhIywKLhf61XTIteVO1QUBk89Vg/viewform?embedded=true"
            width="640"
            height="726"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
          >
            Loading…
          </iframe>
        </div>
      </div>
        </div>
    </>
  );
}
