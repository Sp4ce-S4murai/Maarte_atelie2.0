import { useStore } from '@nanostores/react';
import {
    $cart,
    $cartTotal,
    $isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    generateWhatsAppUrl,
} from '../store/cartStore';

export default function CartDrawer() {
    const items = useStore($cart);
    const total = useStore($cartTotal);
    const isOpen = useStore($isCartOpen);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-red-wine/30 z-50 backdrop-blur-sm"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-oat-milk border-l-2 border-red-wine z-50 flex flex-col shadow-[-6px_0px_0px_#9E1828]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b-2 border-red-wine bg-rose-quartz">
                    <h2 className="font-serif text-xl font-bold flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Seu Carrinho
                    </h2>
                    <button
                        onClick={closeCart}
                        className="p-1 border-2 border-red-wine bg-oat-milk shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                        aria-label="Fechar carrinho"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">🛒</div>
                            <p className="font-serif text-lg font-semibold mb-2">
                                Carrinho vazio
                            </p>
                            <p className="text-sm text-red-wine/60">
                                Adicione produtos lindos ao seu carrinho!
                            </p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-3 p-3 bg-rose-quartz border-2 border-red-wine shadow-brutal-sm"
                            >
                                {/* Item image */}
                                <div className="w-16 h-16 flex-shrink-0 border-2 border-red-wine bg-blush/30 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => { e.currentTarget.src = '/images/fallback-404.png'; }}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Item info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-serif font-bold text-sm truncate">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm font-semibold mt-0.5">
                                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                    </p>

                                    {/* Quantity controls */}
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-6 h-6 flex items-center justify-center border-2 border-red-wine bg-oat-milk text-xs font-bold hover:bg-blush transition-colors cursor-pointer"
                                        >
                                            −
                                        </button>
                                        <span className="text-sm font-bold w-6 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-6 h-6 flex items-center justify-center border-2 border-red-wine bg-oat-milk text-xs font-bold hover:bg-blush transition-colors cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="self-start p-1 text-red-wine/50 hover:text-red-wine transition-colors cursor-pointer"
                                    aria-label={`Remover ${item.name}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t-2 border-red-wine p-4 bg-rose-quartz space-y-3">
                        {/* Total */}
                        <div className="flex items-center justify-between">
                            <span className="font-serif text-lg font-bold">Total:</span>
                            <span className="font-serif text-2xl font-bold">
                                R$ {total.toFixed(2).replace('.', ',')}
                            </span>
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href={generateWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-brutal btn-brutal-primary w-full text-center gap-2"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Finalizar pelo WhatsApp
                        </a>

                        {/* Clear cart */}
                        <button
                            onClick={clearCart}
                            className="w-full text-center text-xs font-semibold text-red-wine/60 hover:text-red-wine uppercase tracking-wider py-1 transition-colors cursor-pointer"
                        >
                            Limpar carrinho
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
