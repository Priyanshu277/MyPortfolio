import { motion } from "framer-motion";

export default function HeroSection({ hide, onStart}) {
  if (hide) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-sky-200 to-transparent z-50 flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800">Hi, I'm Priyanshu Jha</h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-600">
        Welcome to my interactive portfolio!
      </p>
      <p className="mt-2 text-lg text-gray-500 max-w-xl">
        Drive through the street and stop near buildings to explore my projects.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition" onClick={onStart}>
        Start Exploring
      </button>
    </motion.div>
  );
}

  