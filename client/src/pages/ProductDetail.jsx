import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Product not found');
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div></div>;
    if (!product) return <div className="text-center py-20 text-red-500">Producto no encontrado</div>;

    const standardMessage = `Hola, estoy interesado en el producto: ${product.name}`;
    const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(standardMessage)}`;

    // Fallback image
    const imageSrc = product.image || 'https://via.placeholder.com/600?text=No+Image';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/catalogo" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al Catálogo
            </Link>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="h-96 md:h-auto bg-gray-100 flex items-center justify-center p-8">
                        <img
                            src={imageSrc}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain rounded-lg shadow-sm"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/600?text=No+Image' }}
                        />
                    </div>

                    {/* Info Section */}
                    <div className="p-8 md:p-12">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-4xl font-bold text-gray-900 mb-6">${product.price}</p>

                        <div className="prose prose-blue mb-8">
                            <h3 className="text-lg font-semibold mb-2">Descripción:</h3>
                            <p className="text-gray-600">{product.description || 'Sin descripción disponible.'}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors flex items-center justify-center"
                            >
                                <MessageCircle className="mr-2" />
                                Consultar por WhatsApp
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-center text-gray-500">
                            Al hacer clic serás redirigido a WhatsApp para conversar con un vendedor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
