import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contáctanos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Information */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Teléfono / WhatsApp</h3>
                                    <p className="text-gray-600">+593 99 285 8017</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@accesorioscelular.ec</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Ubicación</h3>
                                    <p className="text-gray-600">Av. Lizardo Garcia Sorroza, Guayaquil, Ecuador</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Horario de Atención</h3>
                                    <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Sábado: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Embed */}
                <div className="bg-gray-200 rounded-lg min-h-[400px] overflow-hidden shadow-md">
                    <iframe
                        title="Ubicación"
                        width="100%"
                        height="100%"
                        style={{ minHeight: '400px', border: 0 }}
                        src="https://maps.google.com/maps?q=Av.%20Lizardo%20Garcia%20Sorroza,%20Guayaquil,%20Ecuador&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
