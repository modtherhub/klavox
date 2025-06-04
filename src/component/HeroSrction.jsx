import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSrction = () => {
  return (
    <section className="h-screen bg-gradient-to-r
    from-violet-950 to-black flex xl:flex-row
    flex-col-reverse items-center justify-between lg:px-24
    px-10 relative overflow-hidden">

      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial = {{opacity : 0, y : 80}}
          animate = {{opacity : 1, y : 0}}
          transition = {{
            type: "spring",
            damping: 25,
            stiffness: 40,
            delay: 1.3,
            duration: 1.5,
          }}
          className ="text-3xl md:text-5xl lg:text-6xl 
          font-bold z-10 mb-6">
            Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p 
          initial = {{opacity : 0, y : 80}}
          animate = {{opacity : 1, y : 0}}
          transition = {{
            type: "spring",
            damping: 25,
            stiffness: 40,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-sm md:text-md lg:text-xl 
          text-purple-200 max-w-xl">
          I deliver robust, production-ready websites and web apps 
          with speed and precision. Every project 
          is backed by clean code, clear communication,
          and a commitment to getting it done, on time,
          every time.
        </motion.p>
      </div>

      {/* Right Section */}
       <Spline 
       className="absolute xl:right-[-30%] right-0 top-[-20%]
       lg:top-0"
       scene="https://prod.spline.design/CP5Wz5ZzK3CNDMv0/scene.splinecode" />



    </section>
  )
}

export default HeroSrction
