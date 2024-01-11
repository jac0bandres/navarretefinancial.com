import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const services = [
  ["calculator", "Accounting"],
  ["chart-pie", "Tax planning"],
  ["home", "Insurance"],
  ["file-alt", "Bookkeeping"],
  ["laptop-code", "Websites"],
  ["clipboard", "Advising"],
];

export default function RandomWord(props : any) {
  const [i, set] = useState(Math.floor(Math.random() * props.icons.length));
  let word = props.icons[i];
  let cName = "las la-10x la-" + word[0] + " text-white";

  const [showA, setShowA] = useState(true);

  const fade = useSpring({
    config: { tension: 150, mass: 1, friction: 20 },
    from: { opacity: 1, y: 0 },
    to: {
      opacity: showA ? 1 : 0,
      y: showA ? 0 : 150,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowA(false);
      setTimeout(() => {
        set(i < props.icons.length - 1 ? i + 1 : 0);
      }, 400);
      setTimeout(() => {
        setShowA(true);
      }, 400);
      console.log(services.length);
    }, 4000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <animated.div className="flex flex-col items-center justify-center" style={fade}>
        <i className={cName}></i>
        <h1 className="text-white text-center font-mundial text-3xl">
          {word[1]}
        </h1>
      </animated.div>
    </>
  );
}