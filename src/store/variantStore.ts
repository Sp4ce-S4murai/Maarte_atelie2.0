import { map } from 'nanostores';

// Variante escolhida por produto. Compartilhada entre o seletor de kits
// e a lista "O que está incluso" na página do produto.
export const $selectedVariants = map<Record<string, string>>({});

export function setSelectedVariant(productId: string, variantId: string) {
    $selectedVariants.setKey(productId, variantId);
}
