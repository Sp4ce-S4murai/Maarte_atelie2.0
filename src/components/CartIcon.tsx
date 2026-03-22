import { useStore } from '@nanostores/react';
import { $cartCount, toggleCart } from '../store/cartStore';

export default function CartIcon() {
    const count = useStore($cartCount);

    return (
        <button
            onClick={toggleCart}
            className="relative p-2 border-2 border-red-wine bg-rose-quartz shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
            aria-label={`Carrinho com ${count} itens`}
        >
            {/* Shopping bag SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-wine"
            >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            {/* Badge */}
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-wine text-oat-milk text-xs font-bold w-5 h-5 flex items-center justify-center border border-oat-milk">
                    {count}
                </span>
            )}
        </button>
    );
}
