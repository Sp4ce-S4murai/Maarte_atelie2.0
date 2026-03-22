import { useState } from 'react';
import { addToCart } from '../store/cartStore';
import type { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });
        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 800);
    };

    return (
        <a
            href={`/produto/${product.slug}`}
            className="group bg-rose-quartz border-2 border-red-wine shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 flex flex-col no-underline text-red-wine"
        >
            {/* Image */}
            <div className="relative overflow-hidden border-b-2 border-red-wine aspect-square bg-blush/30">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-oat-milk border-2 border-red-wine px-2 py-0.5 text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
                    {product.category === 'topper' && '🎂 Topper'}
                    {product.category === 'lembrancinha' && '🎁 Lembrancinha'}
                    {product.category === 'forminha' && '🧁 Forminha'}
                </span>
                {/* Ver detalhes overlay */}
                <div className="absolute inset-0 bg-red-wine/0 group-hover:bg-red-wine/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-oat-milk border-2 border-red-wine px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
                        Ver Detalhes →
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-red-wine mb-1 leading-snug">
                    {product.name}
                </h3>
                <p className="text-sm text-red-wine/70 mb-4 flex-1 leading-relaxed">
                    {product.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                    <span className="font-serif text-xl font-bold text-red-wine">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button
                        onClick={handleAdd}
                        disabled={isAdding}
                        className={`btn-brutal text-xs whitespace-nowrap ${isAdding
                                ? 'btn-brutal-secondary !cursor-default'
                                : 'btn-brutal-primary'
                            }`}
                    >
                        {isAdding ? (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Adicionado!
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                Adicionar
                            </>
                        )}
                    </button>
                </div>
            </div>
        </a>
    );
}
