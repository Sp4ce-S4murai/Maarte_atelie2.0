import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Persistent cart stored in localStorage
export const $cart = persistentAtom<CartItem[]>('maarte-cart', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

// Computed values
export const $cartCount = computed($cart, (items) =>
    items.reduce((total, item) => total + item.quantity, 0)
);

export const $cartTotal = computed($cart, (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);

// Cart drawer open state
export const $isCartOpen = atom(false);

export function toggleCart() {
    $isCartOpen.set(!$isCartOpen.get());
}

export function openCart() {
    $isCartOpen.set(true);
}

export function closeCart() {
    $isCartOpen.set(false);
}

// Actions
export function addToCart(product: { id: string; name: string; price: number; image: string }) {
    const currentCart = $cart.get();
    const existingItem = currentCart.find((item) => item.id === product.id);

    if (existingItem) {
        $cart.set(
            currentCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    } else {
        $cart.set([...currentCart, { ...product, quantity: 1 }]);
    }

    openCart();
}

export function removeFromCart(productId: string) {
    const currentCart = $cart.get();
    $cart.set(currentCart.filter((item) => item.id !== productId));
}

export function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const currentCart = $cart.get();
    $cart.set(
        currentCart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
        )
    );
}

export function clearCart() {
    $cart.set([]);
}

// WhatsApp Checkout
const WHATSAPP_NUMBER = '5554581206756'; // Replace with actual number

export function generateWhatsAppUrl(): string {
    const items = $cart.get();
    const total = $cartTotal.get();

    if (items.length === 0) return '#';

    const itemsList = items
        .map(
            (item) =>
                `▸ ${item.name} (x${item.quantity}) — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
        )
        .join('\n');

    const message = `🎀 *Pedido MaarteAtelie* 🎀\n\nOlá! Gostaria de fazer o seguinte pedido:\n\n${itemsList}\n\n💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\nAguardo confirmação! 💕`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
