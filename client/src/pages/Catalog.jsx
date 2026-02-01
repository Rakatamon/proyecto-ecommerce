import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('Todas');
    const [categories, setCategories] = useState(['Todas']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                // Extract unique categories
                const uniqueCategories = ['Todas', ...new Set(data.map(p => p.category))];
                setCategories(uniqueCategories);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (category === 'Todas') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === category));
        }
    }, [category, products]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Catálogo de Productos</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex items-center mb-4">
                            <Filter className="w-5 h-5 mr-2 text-blue-600" />
                            <h2 className="font-semibold text-lg">Categorías</h2>
                        </div>
                        <ul className="space-y-2">
                            {categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setCategory(cat)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${category === cat
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        </div>
                    ) : filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-lg border border-dashed">
                            <p className="text-gray-500">No se encontraron productos en esta categoría.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
