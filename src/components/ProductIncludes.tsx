import { useStore } from '@nanostores/react';
import { $selectedVariants } from '../store/variantStore';
import type { ProductVariant } from '../data/products';

interface ProductIncludesProps {
    productId: string;
    includes: string[];
    variants?: ProductVariant[];
}

export default function ProductIncludes({ productId, includes, variants }: ProductIncludesProps) {
    const storedVariantId = useStore($selectedVariants)[productId];
    const variant = variants?.find((v) => v.id === storedVariantId) ?? variants?.[0];
    const items = [...(variant?.includes ?? []), ...includes];

    return (
        <div className="bg-oat-milk border-2 border-red-wine shadow-brutal-sm p-5 mb-6">
            <h3 className="font-serif text-lg font-bold mb-3 flex items-center gap-2">
                <span>📋</span> O que está incluso
            </h3>
            {variant?.includes && (
                <span className="inline-block bg-blush/40 border border-red-wine/30 px-2 py-0.5 mb-3 text-xs font-semibold uppercase tracking-wider">
                    {variant.name}
                </span>
            )}
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm">
                        <span className="text-red-wine mt-0.5 font-bold">✓</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
