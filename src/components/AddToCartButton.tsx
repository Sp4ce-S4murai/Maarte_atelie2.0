import { useState } from 'react';
import { addToCart } from '../store/cartStore';

interface ProductVariant {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface AddToCartButtonProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        variants?: ProductVariant[];
    };
    size?: 'sm' | 'lg';
}

export default function AddToCartButton({ product, size = 'lg' }: AddToCartButtonProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [selectedVariantId, setSelectedVariantId] = useState<string>(
        product.variants && product.variants.length > 0 ? product.variants[0].id : ''
    );

    const handleAdd = () => {
        let finalProduct = { id: product.id, name: product.name, price: product.price, image: product.image };
        
        if (product.variants && product.variants.length > 0) {
            const variant = product.variants.find(v => v.id === selectedVariantId);
            if (variant) {
                finalProduct = {
                    id: `${product.id}-${variant.id}`,
                    name: `${product.name} - ${variant.name}`,
                    price: variant.price,
                    image: product.image
                };
            }
        }
        
        addToCart(finalProduct);
        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 1200);
    };

    const currentPrice = product.variants && product.variants.length > 0
        ? product.variants.find(v => v.id === selectedVariantId)?.price || product.price
        : product.price;

    return (
        <div className="flex flex-col gap-4">
            {product.variants && product.variants.length > 0 && (
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-red-wine uppercase tracking-wider">
                        Escolha o seu Kit:
                    </label>
                    <div className="flex flex-col gap-2">
                        {product.variants.map((v) => (
                            <label key={v.id} className={`flex items-center justify-between p-3 border-2 cursor-pointer transition-colors ${selectedVariantId === v.id ? 'border-red-wine bg-blush/20' : 'border-red-wine/20 bg-oat-milk hover:border-red-wine/50'}`}>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name={`variant-${product.id}`}
                                        value={v.id}
                                        checked={selectedVariantId === v.id}
                                        onChange={() => setSelectedVariantId(v.id)}
                                        className="w-4 h-4 text-red-wine border-red-wine focus:ring-red-wine bg-oat-milk"
                                    />
                                    <span className="font-bold text-red-wine">{v.name}</span>
                                </div>
                                <span className="font-semibold text-red-wine/80">
                                    R$ {v.price.toFixed(2).replace('.', ',')}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            <div className={`flex items-center justify-between px-4 py-3 bg-rose-quartz border-2 border-red-wine shadow-brutal-sm mb-2 ${product.variants ? 'mt-2' : ''}`}>
               <span className="text-sm font-bold text-red-wine/70 uppercase">Total do Item:</span>
               <span className="font-serif text-2xl font-bold text-red-wine">
                   R$ {currentPrice.toFixed(2).replace('.', ',')}
               </span>
            </div>

            <button
                onClick={handleAdd}
                disabled={isAdding}
                className={`btn-brutal w-full ${isAdding ? 'btn-brutal-secondary !cursor-default' : 'btn-brutal-primary'
                    } ${size === 'lg' ? 'text-base py-3.5 px-6' : 'text-sm py-2.5 px-4'}`}
            >
                {isAdding ? (
                    <>
                        <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Adicionado ao carrinho!
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Adicionar ao Carrinho
                    </>
                )}
            </button>
        </div>
    );
}
