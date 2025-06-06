import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 font-sans text-gray-800">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-24 px-6"
      >
        <img src="/aulaestrella-logo.png" alt="Aulaestrella logo" className="w-32 h-32 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Aulaestrella</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Recursos físicos y digitales hechos con amor para transformar aulas en espacios mágicos.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all">
          Ver productos
        </Button>
      </motion.section>
    </div>
  );
}
