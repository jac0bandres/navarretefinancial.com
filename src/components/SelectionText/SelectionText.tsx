import { useSpring, animated } from '@react-spring/web'

export default function SelectionText({children} : any) {
  const [spring, set] = useSpring(() => ({
    transform: `scale(1)`,
    from: {
      transform: `scale(1)`,
    },
    config: {
      tension: 600,
      mass: 2,
      velocity: 8,
    },
  }));

  const updateHover = (hovering : boolean) => ({
    transform: `scale(${hovering ? 1.2 : 1})`,
  });
  return (
    <>
      <animated.div
        className="flex hover:border-4 border-green-950 bg-gradient-to-r h-4/5 mx-5 items-center bg-teal-800 rounded-full shadow-2xl"
        style={spring}
        onMouseEnter={() => set(updateHover(true))}
        onMouseDown={() => set(updateHover(true))}
        onMouseLeave={() => set(updateHover(false))}
      >
        {children}
      </animated.div>
    </>
  );
}
