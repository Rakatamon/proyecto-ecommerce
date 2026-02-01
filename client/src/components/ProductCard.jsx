import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    // Fallback image if none provided
    const imageSrc = product.image || 'https://via.placeholder.com/300?text=No+Image';

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link to={`/producto/${product.id}`}>
                <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                        src={imageSrc}
                        alt={product.name}
                        className="object-cover w-full h-full"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image' }}
                    />
                </div>
            </Link>
            <div className="p-4">
                <Link to={`/producto/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600">{product.name}</h3>
                </Link>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <Link
                        to={`/producto/${product.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
