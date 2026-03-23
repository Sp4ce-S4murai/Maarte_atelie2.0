export interface ProductSpecs {
    material: string;
    gramatura?: string;
    impressao?: string;
    tamanho: string;
    acabamento: string;
    quantidade?: string;
    personalizacao: string;
    prazoProducao: string;
}

export interface ProductVariant {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    longDescription: string;
    price: number;
    image: string;
    category: 'topo-bolo' | 'docinhos';
    specs: ProductSpecs;
    includes: string[];
    tags: string[];
    variants?: ProductVariant[];
    gallery?: string[];
}

export const products: Product[] = [
    {
        id: 'forminhas-personalizadas',
        slug: 'forminhas-personalizadas',
        name: 'Forminhas Personalizadas',
        description: 'Forminhas exclusivas para seus docinhos com descontos progressivos em KITS.',
        longDescription: 'As Forminhas Personalizadas dão o toque especial que sua mesa de doces precisa. Selecione o nosso Kit de acordo com o tamanho da sua festa e aproveite nossos descontos progressivos!',
        price: 15.00,
        image: '/images/forminhas/Forminhas (1).jpeg',
        gallery: [
            '/images/forminhas/Forminhas (1).jpeg',
            '/images/forminhas/Forminhas (2).jpeg',
            '/images/forminhas/Forminhas (3).jpeg',
            '/images/forminhas/Forminhas (4).jpeg'
        ],
        category: 'docinhos',
        specs: {
            material: 'Papel Color Plus (premium)',
            tamanho: 'Base 3,5cm',
            acabamento: 'Recorte especial unificado',
            personalizacao: 'Cores e modelos à sua escolha',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            'Forminhas com design exclusivo',
            'Produção artesanal com muito carinho',
            'Embalagem protetora',
        ],
        tags: ['forminha', 'doce', 'personalizada', 'kit'],
        variants: [
            { id: '30-unidades', name: 'Kit 30 unidades', quantity: 30, price: 15.00 },
            { id: '50-unidades', name: 'Kit 50 unidades', quantity: 50, price: 22.50 },
            { id: '100-unidades', name: 'Kit 100 unidades', quantity: 100, price: 40.00 },
        ]
    },
    {
        id: 'topinhos-doces',
        slug: 'topinhos-doces',
        name: 'Topinhos de Docinhos Personalizados',
        description: 'Topinhos decorativos para os seus docinhos com descontos especiais em KITS.',
        longDescription: 'Os Topinhos de Doces dão vida e imergem os convidados no tema da sua festa. Selecione o nosso Kit que seja perfeito para a sua celebração e garanta descontos progressivos.',
        price: 15.00,
        image: '/images/topinhos/topinho-1.jpeg',
        gallery: [
            '/images/topinhos/topinho-1.jpeg',
            '/images/topinhos/topinho-2.jpeg',
            '/images/topinhos/topinho-3.jpeg'
        ],
        category: 'docinhos',
        specs: {
            material: 'Papel fotográfico/couché e palitinhos',
            tamanho: 'Mini',
            acabamento: 'Recorte digital em camadas',
            personalizacao: 'Tema exclusivo da sua festa',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            'Mini toppers já montados no palitinho',
            'Prontos para enfeitar os docinhos!',
        ],
        tags: ['topper', 'doce', 'personalizado', 'kit'],
        variants: [
            { id: '20-unidades', name: 'Kit 20 unidades', quantity: 20, price: 15.00 },
            { id: '50-unidades', name: 'Kit 50 unidades', quantity: 50, price: 32.00 },
            { id: '100-unidades', name: 'Kit 100 unidades', quantity: 100, price: 60.00 },
        ]
    },
    {
        id: 'topo-bolo-simples',
        slug: 'topo-bolo-simples',
        name: 'Topo de Bolo Simples',
        description: 'Topo confeccionado com poucas camadas, ideal para uma decoração express.',
        longDescription: 'O Topo Simples inclui projeto com 1 ou 2 folhas, garantindo detalhes lindos com um corte mais rápido. A opção ideal para festas práticas que não abrem mão de um toque personalizado.',
        price: 25.00,
        image: '/images/topo-bolo/simples.png',
        category: 'topo-bolo',
        specs: {
            material: 'Papel fotográfico premium 180g',
            tamanho: 'Padrão (Bolo 15 a 20cm)',
            acabamento: 'Recorte especial (1-2 camadas)',
            personalizacao: 'Nome e Idade',
            prazoProducao: '3 a 5 dias úteis',
        },
        includes: [
            'Topo principal com palito fixado',
            'Até 2 elementos secundários soltos',
        ],
        tags: ['topo de bolo', 'simples'],
    },
    {
        id: 'topo-bolo-luxo',
        slug: 'topo-bolo-luxo',
        name: 'Topo de Bolo Luxo 3D',
        description: 'Topo sofisticado em camadas 3D com fita banana e acabamentos premium.',
        longDescription: 'O Topo de Luxo 3D eleva a sua mesa de doces! Construído com 3 grandes camadas coladas em fita banana para dar profundidade, palitos transparentes resistentes e acabamentos manuais de super luxo.',
        price: 35.00,
        image: '/images/topo-bolo/luxo.png',
        category: 'topo-bolo',
        specs: {
            material: 'Papel color plus e cartolina lamicote especial',
            tamanho: 'Padrão (Bolo 15 a 20cm) + apliques',
            acabamento: 'Recorte 3D em múltiplas camadas e palito transparente',
            personalizacao: 'Nome, Idade, Cores e Temas',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            'Topo principal 3D robusto já fixado no palito',
            'Elementos menores e montagem superposicionada',
        ],
        tags: ['topo de bolo', 'luxo', '3d'],
    }
];

export const categoryLabels: Record<string, string> = {
    'topo-bolo': 'Topo de Bolo',
    docinhos: 'Docinhos',
};

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}
