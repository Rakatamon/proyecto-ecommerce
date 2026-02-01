import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch featured products (for now just all, slice 4)
        fetch(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 4)))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Los Mejores Accesorios para tu Celular
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Fundas, cargadores, audífonos y más. Encuentra lo que necesitas hoy.
                    </p>
                    <Link
                        to="/catalogo"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:text-lg"
                    >
                        Ver Catálogo
                        <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>

            {/* Featured Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Productos Destacados</h2>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No hay productos destacados por el momento.</p>
                        <p className="text-sm text-gray-400 mt-2">(Asegúrate de ejecutar el servidor backend)</p>
                    </div>
                )}

                <div className="text-center mt-12">
                    <Link to="/catalogo" className="text-blue-600 font-medium hover:text-blue-800">
                        Ver todos los productos &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
