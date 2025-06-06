import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 font-sans text-gray-800">
      {/* Hero Section */}
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

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Sobre Aulaestrella</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Aulaestrella nace del corazón de una maestra apasionada por inspirar a sus alumnos. Aquí encontrarás
          materiales llenos de color, calidez y creatividad, diseñados para apoyar tanto en el aula como en casa.
        </p>
      </motion.section>

      {/* Product Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-blue-50 py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Nuestros productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Planeación Semanal PDF</h3>
            <p className="text-sm mb-4">Imprimible ideal para organizar clases con estilo y color.</p>
            <Button>Comprar</Button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Kit de Bienvenida</h3>
            <p className="text-sm mb-4">Incluye cartel, stickers y tarjeta para nuevos alumnos.</p>
            <Button>Comprar</Button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Decoración de Aula</h3>
            <p className="text-sm mb-4">Set físico con elementos coloridos para motivar a los niños.</p>
            <Button>Comprar</Button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">¿Tienes dudas o quieres hacer un pedido personalizado?</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Escríbenos por WhatsApp y con gusto te ayudamos.
        </p>
        <a
          href="https://wa.me/521XXXXXXXXXX"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          Escríbenos por WhatsApp
        </a>
      </motion.section>
    </div>
  );
}
