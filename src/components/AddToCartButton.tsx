import { useState } from 'react';
import { addToCart } from '../store/cartStore';

interface AddToCartButtonProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
    };
    size?: 'sm' | 'lg';
}

export default function AddToCartButton({ product, size = 'lg' }: AddToCartButtonProps) {
    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 1200);
    };

    return (
        <button
            onClick={handleAdd}
            disabled={isAdding}
            className={`btn-brutal w-full ${isAdding ? 'btn-brutal-secondary !cursor-default' : 'btn-brutal-primary'
                } ${size === 'lg' ? 'text-base py-3.5 px-6' : 'text-sm py-2.5 px-4'}`}
        >
            {isAdding ? (
                <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Adicionado ao carrinho!
                </>
            ) : (
                <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Adicionar ao Carrinho
                </>
            )}
        </button>
    );
}
