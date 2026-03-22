export interface ProductSpecs {
    material: string;
    gramatura: string;
    impressao: string;
    tamanho: string;
    acabamento: string;
    quantidade?: string;
    personalizacao: string;
    prazoProducao: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    longDescription: string;
    price: number;
    image: string;
    category: 'topper' | 'lembrancinha' | 'forminha';
    specs: ProductSpecs;
    includes: string[];
    tags: string[];
}

export const products: Product[] = [
    {
        id: 'topper-bolo-floral',
        slug: 'topper-bolo-floral',
        name: 'Topper de Bolo Floral',
        description: 'Topper personalizado com design floral delicado, perfeito para festas românticas e chás de bebê.',
        longDescription: 'Nosso Topper de Bolo Floral é a peça central perfeita para sua mesa de doces. Cada flor é recortada à mão em camadas, criando um efeito 3D que encanta a todos. Ideal para casamentos, chás de bebê, batizados e festas com temática romântica. O design pode ser totalmente personalizado com as cores da sua festa.',
        price: 25.90,
        image: '/images/topper-floral.webp',
        category: 'topper',
        specs: {
            material: 'Papel para scrapbook importado + palito de madeira revestido',
            gramatura: '180g/m²',
            impressao: 'Impressão digital de alta resolução (1200 DPI)',
            tamanho: 'Aproximadamente 15cm x 20cm (com palito)',
            acabamento: 'Recorte a laser com camadas em relevo 3D',
            personalizacao: 'Nome, idade, cores e tema à sua escolha',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            '1 topper principal com palito',
            'Embalagem protetora individual',
            'Cartão com instruções de uso',
        ],
        tags: ['topper', 'bolo', 'floral', 'romântico', 'chá de bebê'],
    },
    {
        id: 'topper-bolo-aniversario',
        slug: 'topper-bolo-aniversario',
        name: 'Topper de Bolo Aniversário',
        description: 'Topper temático para aniversário com nome e idade personalizados em papel especial.',
        longDescription: 'O Topper de Bolo Aniversário é perfeito para marcar esse dia tão especial! Produzido com materiais de alta qualidade, ele traz o nome e a idade do aniversariante em destaque, com design exclusivo que combina com qualquer tema de festa. Pode ser feito em diversas cores e estilos — do clássico ao moderno.',
        price: 29.90,
        image: '/images/topper-aniversario.webp',
        category: 'topper',
        specs: {
            material: 'Papel couché premium + glitter cardstock + palito de bambu',
            gramatura: '200g/m²',
            impressao: 'Impressão digital UV com acabamento brilhante',
            tamanho: 'Aproximadamente 18cm x 22cm (com palito)',
            acabamento: 'Recorte eletrônico com detalhes em glitter e camadas sobrepostas',
            personalizacao: 'Nome, idade, tema, cores e elementos decorativos',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            '1 topper principal personalizado',
            '2 mini toppers laterais decorativos',
            'Embalagem protetora',
        ],
        tags: ['topper', 'bolo', 'aniversário', 'personalizado', 'festa'],
    },
    {
        id: 'lembrancinha-caixinha',
        slug: 'lembrancinha-caixinha',
        name: 'Caixinha Personalizada',
        description: 'Lembrancinhas em caixinha de papel kraft com tag personalizada e laço artesanal.',
        longDescription: 'Nossas Caixinhas Personalizadas são perfeitas para presentear os convidados com estilo e carinho. Cada caixinha é montada à mão com atenção a cada detalhe — desde a impressão até o laço final. Podem acomodar docinhos, confetes, sabonetes artesanais ou qualquer mimo que você desejar. O design da tag e da caixinha é 100% personalizado.',
        price: 8.50,
        image: '/images/lembrancinha-caixinha.webp',
        category: 'lembrancinha',
        specs: {
            material: 'Papel kraft 100% reciclável + fita de cetim',
            gramatura: '300g/m² (estrutura da caixa)',
            impressao: 'Impressão offset em CMYK + hot stamping opcional',
            tamanho: '8cm x 8cm x 5cm (fechada)',
            acabamento: 'Vinco e corte especial, montagem manual com laço artesanal',
            quantidade: 'Pedido mínimo: 20 unidades',
            personalizacao: 'Design, cores, texto da tag, tipo de laço',
            prazoProducao: '7 a 10 dias úteis',
        },
        includes: [
            'Caixinha montada com tag personalizada',
            'Laço de cetim na cor escolhida',
            'Adesivo de vedação temático',
        ],
        tags: ['lembrancinha', 'caixinha', 'kraft', 'personalizada', 'casamento'],
    },
    {
        id: 'lembrancinha-sacola',
        slug: 'lembrancinha-sacola',
        name: 'Sacolinha Surpresa',
        description: 'Sacolinhas temáticas com estampa exclusiva, ideais para doces e lembranças de festa.',
        longDescription: 'As Sacolinhas Surpresa da MaarteAtelie transformam qualquer lembrancinha em um presente especial. Com estampas exclusivas criadas pelo nosso time de designers, cada sacolinha é um pedacinho da arte da sua festa. Perfeitas para festas infantis, chás e confraternizações. Cabem docinhos, brinquedos pequenos e lembrancinhas diversas.',
        price: 6.90,
        image: '/images/lembrancinha-sacola.webp',
        category: 'lembrancinha',
        specs: {
            material: 'Papel couché fosco com laminação protetora',
            gramatura: '150g/m²',
            impressao: 'Impressão digital de alta definição (frente e verso)',
            tamanho: '12cm x 18cm x 6cm (com alças)',
            acabamento: 'Alças de papel torcido reforçado + fundo reforçado',
            quantidade: 'Pedido mínimo: 20 unidades',
            personalizacao: 'Estampa, cores, nome do aniversariante e tema',
            prazoProducao: '7 a 10 dias úteis',
        },
        includes: [
            'Sacolinha com estampa personalizada (frente e verso)',
            'Alças reforçadas',
            'Adesivo de fechamento',
        ],
        tags: ['lembrancinha', 'sacolinha', 'festa infantil', 'doces'],
    },
    {
        id: 'forminha-doce-floral',
        slug: 'forminha-doce-floral',
        name: 'Forminha Floral',
        description: 'Forminhas para docinhos com recorte floral em papel de alta gramatura, pacote com 50 unidades.',
        longDescription: 'As Forminhas Florais são o detalhe que faz toda diferença na sua mesa de doces. Cada forminha tem pétalas delicadas recortadas a laser que se abrem como uma flor, envolvendo o docinho com elegância. Produzidas em papel de alta gramatura, garantem estrutura e beleza ao mesmo tempo. Disponíveis em diversas cores para combinar com a paleta da sua festa.',
        price: 18.90,
        image: '/images/forminha-floral.webp',
        category: 'forminha',
        specs: {
            material: 'Papel Color Plus (fabricação nacional premium)',
            gramatura: '180g/m²',
            impressao: 'Sem impressão — cor na massa do papel',
            tamanho: 'Base 3,5cm, abertura 8cm (diâmetro)',
            acabamento: 'Recorte a laser com 8 pétalas simétricas',
            quantidade: 'Pacote com 50 unidades',
            personalizacao: 'Cor do papel e formato das pétalas',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            '50 forminhas recortadas a laser',
            'Embalagem protetora com separadores',
            'Guia de montagem e abertura das pétalas',
        ],
        tags: ['forminha', 'doce', 'floral', 'mesa de doces', 'laser'],
    },
    {
        id: 'forminha-wrapper',
        slug: 'forminha-wrapper',
        name: 'Wrapper para Cupcake',
        description: 'Wrappers decorativos para cupcakes com estampa personalizada, pacote com 24 unidades.',
        longDescription: 'Nossos Wrappers para Cupcake adicionam um toque profissional e encantador à sua mesa. Com estampa totalmente personalizada, eles envolvem os cupcakes criando uma apresentação digna de confeitaria profissional. Fabricados em papel especial com corte decorativo na borda superior, são fáceis de montar e resistem à gordura dos doces.',
        price: 14.90,
        image: '/images/forminha-wrapper.webp',
        category: 'forminha',
        specs: {
            material: 'Papel couché com laminação fosca antigorura',
            gramatura: '230g/m²',
            impressao: 'Impressão digital CMYK com perfil de cores calibrado',
            tamanho: 'Altura 5cm, circunferência 21cm (cupcake padrão)',
            acabamento: 'Corte decorativo na borda superior (rendado ou geométrico)',
            quantidade: 'Pacote com 24 unidades',
            personalizacao: 'Estampa, cores, tipo de corte decorativo',
            prazoProducao: '5 a 7 dias úteis',
        },
        includes: [
            '24 wrappers com estampa personalizada',
            'Encaixes pré-vincados para fácil montagem',
            'Embalagem protetora plana',
        ],
        tags: ['forminha', 'wrapper', 'cupcake', 'personalizado', 'confeitaria'],
    },
];

export const categoryLabels: Record<string, string> = {
    topper: 'Topper de Bolo',
    lembrancinha: 'Lembrancinhas',
    forminha: 'Forminhas',
};

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}
