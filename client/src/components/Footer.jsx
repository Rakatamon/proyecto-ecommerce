import React from 'react';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Smartphone vr</h3>
                        <p className="text-gray-400">
                            Tu tienda de confianza para los mejores accesorios móviles. Calidad y precio garantizado.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center"><Phone size={16} className="mr-2" /> +593 99 285 8017</li>
                            <li className="flex items-center"><MapPin size={16} className="mr-2" /> Guayaquil, Ecuador</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Smartphone vr. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
