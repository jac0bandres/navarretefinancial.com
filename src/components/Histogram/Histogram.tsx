import { useSpring, animated } from "@react-spring/web"
import { useEffect, useState } from "react"


export default function Histogram() {
    const [loop, setLoop] = useState(false)
    const [randX, setRandX] = useState(Math.floor(100 + Math.random() * 500))
    const spring = (x : number) => useSpring({
        from: {
            x: 0,
            width: 0 
        },
        to: {
            x: 100,
            width: x,
        },
    })
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRandX(Math.floor(100 + Math.random() * 500))
            setLoop(!loop)
        }, 3000)
        return () => clearInterval(interval)
    })

    return(
        <>
        <div className="flex flex-col justify-end items-end w-80 h-64 overflow-hidden">
            <animated.div style={spring(Math.floor(Math.random() * 300))} className="h-1/5 bg-green-300 border-2 border-white"></animated.div>
            <animated.div style={spring(0 + Math.floor(Math.random() * 300))} className="h-1/5 bg-green-400 border-2 border-white"></animated.div>
            <animated.div style={spring(50 + Math.floor(Math.random() * 300))} className="h-1/5 bg-teal-500 border-2 border-white"></animated.div>
            <animated.div style={spring(100 + Math.floor(Math.random() * 300))} className="h-1/5 bg-teal-700 border-2 border-white"></animated.div>
            <animated.div style={spring(200 + Math.floor(Math.random() * 300))} className="h-1/5 bg-teal-900 border-2 border-white"></animated.div>

        </div>
        </>
    )
}