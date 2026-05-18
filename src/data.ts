import { Product } from './context/CartContext';

export const products: Product[] = [
  { id: '1', name: 'Corona', volume: '355ml', price: 1.50, origin: 'México', imageFlag: '🇲🇽', category: 'Importadas', brand: 'Corona' },
  { id: '2', name: 'Corona Extra', volume: '710ml', price: 2.80, origin: 'México', imageFlag: '🇲🇽', category: 'Importadas', brand: 'Corona' },
  { id: '3', name: 'Modelo Especial', volume: '355ml', price: 1.75, origin: 'México', imageFlag: '🇲🇽', category: 'Importadas', brand: 'Modelo' },
  { id: '4', name: 'Modelo Negra', volume: '355ml', price: 1.85, origin: 'México', imageFlag: '🇲🇽', category: 'Importadas', brand: 'Modelo' },
  { id: '5', name: 'Heineken', volume: '330ml', price: 1.60, origin: 'Holanda', imageFlag: '🇳🇱', category: 'Importadas', brand: 'Heineken' },
  { id: '6', name: 'Stella Artois', volume: '330ml', price: 1.70, origin: 'Bélgica', imageFlag: '🇧🇪', category: 'Importadas', brand: 'Stella Artois' },
  { id: '7', name: 'Budweiser', volume: '355ml', price: 1.40, origin: 'USA', imageFlag: '🇺🇸', category: 'Importadas', brand: 'Budweiser' },
  { id: '8', name: 'Club Verde', volume: '330ml', price: 1.20, origin: 'Ecuador', imageFlag: '🇪🇨', category: 'Nacionales', brand: 'Club' },
  { id: '9', name: 'Pilsener', volume: '600ml', price: 1.50, origin: 'Ecuador', imageFlag: '🇪🇨', category: 'Nacionales', brand: 'Pilsener' },
  { id: '10', name: 'Brahma', volume: '355ml', price: 1.10, origin: 'Brasil', imageFlag: '🇧🇷', category: 'Importadas', brand: 'Brahma' },
  { id: '11', name: 'Cusqueña Dorada', volume: '330ml', price: 1.60, origin: 'Perú', imageFlag: '🇵🇪', category: 'Importadas', brand: 'Cusqueña' },
  { id: '12', name: 'Sol', volume: '355ml', price: 1.50, origin: 'México', imageFlag: '🇲🇽', category: 'Importadas', brand: 'Sol' },
];

export const bestsellersIds = ['1', '3', '5', '2', '9', '6', '4', '8', '7', '12', '11', '10'];

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPostFull {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPostFull[] = [
  {
    id: 'post-1',
    title: 'La historia detrás de Corona: de México al mundo',
    excerpt: 'Descubre cómo una cerveza local se convirtió en un ícono global de la playa y el relax.',
    date: '10 May 2025',
    readTime: '5 min de lectura',
    category: 'Cultura',
    content: [
      { type: 'paragraph', text: 'Corona es hoy la cerveza mexicana más consumida en el mundo, presente en más de 150 países. Pero su historia comenzó de manera modesta en la Ciudad de México, cuando la Cervecería Modelo la presentó al público por primera vez el 8 de marzo de 1925.' },
      { type: 'paragraph', text: 'En sus primeros años, Corona era una cerveza local, consumida principalmente en la capital mexicana. Su botella transparente, que hoy es parte de su identidad icónica, fue en realidad una decisión de marketing que permitía a los consumidores ver la claridad y pureza de la bebida.' },
      { type: 'heading', text: 'De lo local a lo global' },
      { type: 'paragraph', text: 'La expansión de Corona fuera de México comenzó en los años 60, ganando popularidad en Estados Unidos gracias a turistas que la descubrían en playas mexicanas. Para los años 80, se convirtió en uno de los íconos de la cultura de playa y el lifestyle relajado.' },
      { type: 'paragraph', text: 'Hoy, Corona es la cerveza importada número uno en Estados Unidos y una de las cinco marcas de cerveza más valiosas del mundo, según el ranking Brand Finance. Su lema "Find Your Beach" resuena con millones de consumidores en todos los continentes.' },
      { type: 'heading', text: '¿Por qué el limón?' },
      { type: 'paragraph', text: 'Una de las tradiciones más conocidas es servir Corona con un gajo de limón insertado en la botella. Existen varias teorías sobre el origen: algunos dicen que comenzó como una forma de evitar que las moscas entraran a la botella, otros aseguran que es simplemente para realzar el sabor fresco y cítrico.' },
      { type: 'paragraph', text: 'Lo indudable es que el ritual del limón se ha convertido en parte inseparable de la experiencia Corona, distinguiéndola de cualquier otra cerveza en el mundo.' },
      { type: 'heading', text: 'Corona en Ecuador' },
      { type: 'paragraph', text: 'En Quito, Corona se ha consolidado como una de las cervezas más pedidas en reuniones, previas y eventos. Su sabor suave y refrescante la hace ideal para el clima de la capital ecuatoriana, especialmente en los valles. En Reserva Beer Shop la tenemos disponible en 355ml y 710ml para que elijas según la ocasión.' },
    ],
  },
  {
    id: 'post-2',
    title: 'Modelo Negra vs Modelo Especial: ¿cuál elegir?',
    excerpt: 'Una guía completa para entender las diferencias de sabor, cuerpo y maridaje.',
    date: '02 May 2025',
    readTime: '4 min de lectura',
    category: 'Guía',
    content: [
      { type: 'paragraph', text: 'Grupo Modelo tiene dos estrellas absolutas en su catálogo: la Especial y la Negra. Aunque comparten origen y marca, son experiencias completamente distintas. Si alguna vez te has preguntado cuál pedir, esta guía es para ti.' },
      { type: 'heading', text: 'Modelo Especial: la clásica' },
      { type: 'paragraph', text: 'La Modelo Especial es una Pilsner estilo Munich, dorada y cristalina. Con un ABV de 4.4%, es suave y muy accesible. Su sabor es limpio, con notas de malta y un leve amargor al final. Es la elección perfecta para sesiones largas y climas cálidos.' },
      { type: 'list', items: ['Color: dorado brillante', 'Sabor: ligero, malta dulce, final limpio', 'ABV: 4.4%', 'Maridaje: tacos, mariscos, comida ligera'] },
      { type: 'heading', text: 'Modelo Negra: la profunda' },
      { type: 'paragraph', text: 'La Modelo Negra es una Munich Dunkel, oscura y compleja. Con un ABV de 5.4%, tiene cuerpo medio y un perfil de sabor mucho más rico: notas de caramelo, chocolate ligero y malta tostada. Es perfecta para quienes buscan algo más sofisticado.' },
      { type: 'list', items: ['Color: ámbar oscuro / caoba', 'Sabor: caramelo, malta tostada, chocolate suave', 'ABV: 5.4%', 'Maridaje: carnes rojas, pastas, quesos maduros'] },
      { type: 'heading', text: '¿Cuál elegir?' },
      { type: 'paragraph', text: 'Depende del momento. Para una tarde de relax o una reunión casual con amigos, la Especial es imbatible. Si quieres algo más sofisticado para acompañar una buena comida o simplemente explorar nuevos sabores, la Negra es tu cerveza. Lo mejor: en Reserva Beer Shop las tenemos ambas disponibles, ¡pide las dos y decide tú mismo!' },
    ],
  },
  {
    id: 'post-3',
    title: 'Las 5 cervezas importadas más pedidas en Quito',
    excerpt: 'Conoce las favoritas de nuestros clientes y por qué no faltan en sus reuniones.',
    date: '28 Abr 2025',
    readTime: '6 min de lectura',
    category: 'Tendencias',
    content: [
      { type: 'paragraph', text: 'Quito tiene un paladar cada vez más exigente cuando se trata de cervezas. Nuestros clientes ya no se conforman con lo de siempre: buscan variedad, calidad y experiencias nuevas. Aquí te presentamos el ranking de las importadas más pedidas en nuestra tienda durante los últimos meses.' },
      { type: 'heading', text: '#1 — Corona (México)' },
      { type: 'paragraph', text: 'La reina indiscutida. Su sabor ligero y su botella icónica la hacen perfecta para todo tipo de ocasión. Ya sea con o sin limón, la Corona encabeza siempre nuestra lista de más pedidas.' },
      { type: 'heading', text: '#2 — Modelo Especial (México)' },
      { type: 'paragraph', text: 'La competencia perfecta de Corona. La Modelo Especial ha ganado muchísimos adeptos en Quito por su sabor más robusto pero igual de refrescante. Los que la prueban una vez, vuelven por más.' },
      { type: 'heading', text: '#3 — Heineken (Holanda)' },
      { type: 'paragraph', text: 'El estilo europeo que no pasa de moda. La Heineken en su icónica lata o botella verde es sinónimo de calidad y elegancia. Su lúpulo característico y su amargor equilibrado la hacen única.' },
      { type: 'heading', text: '#4 — Stella Artois (Bélgica)' },
      { type: 'paragraph', text: 'La belga más famosa del mundo. La Stella Artois tiene una elegancia que pocas cervezas pueden igualar. Su sabor equilibrado entre malta y lúpulo, combinado con su packaging premium, la hace perfecta para ocasiones especiales.' },
      { type: 'heading', text: '#5 — Cusqueña Dorada (Perú)' },
      { type: 'paragraph', text: 'La sorpresa peruana. La Cusqueña ha ganado terreno rápidamente en Quito por su excelente relación calidad-precio y su sabor suave pero con carácter. Hecha con agua de los Andes, tiene algo especial que los ecuatorianos han sabido apreciar.' },
    ],
  },
  {
    id: 'post-4',
    title: 'Cómo maridar cerveza con comida ecuatoriana',
    excerpt: 'Desde un ceviche hasta un hornado: aprende a combinar los sabores locales con la cerveza ideal.',
    date: '15 Abr 2025',
    readTime: '7 min de lectura',
    category: 'Maridaje',
    content: [
      { type: 'paragraph', text: 'La gastronomía ecuatoriana es rica, variada y llena de sabores intensos. Desde el ceviche de la Costa hasta el hornado serrano, cada plato tiene características únicas que maridan mejor con ciertos estilos de cerveza. Aquí te enseñamos cómo elevar tu experiencia culinaria.' },
      { type: 'heading', text: 'Ceviche: necesitas frescura' },
      { type: 'paragraph', text: 'El ceviche ecuatoriano, con su base de limón y tomate, es ácido y vibrante. La cerveza perfecta aquí es ligera y refrescante. La Corona con su clásico limón o la Pilsener nacional son elecciones impecables que no compiten con los sabores del mar sino que los complementan.' },
      { type: 'heading', text: 'Hornado: busca algo con cuerpo' },
      { type: 'paragraph', text: 'El hornado es un plato contundente: cerdo asado, papas, mote y encurtido. Necesitas una cerveza con más cuerpo que aguante esos sabores grasos e intensos. La Modelo Negra o la Stella Artois son las opciones ideales, con su malta más pronunciada que corta la grasa y limpia el paladar.' },
      { type: 'heading', text: 'Seco de pollo o res: el equilibrio europeo' },
      { type: 'paragraph', text: 'Los secos ecuatorianos tienen salsas complejas con hierbas, ají y chicha de jora. Aquí una Heineken hace maravillas: su amargor equilibrado combina perfectamente con las especias sin apagar los sabores herbales del guiso.' },
      { type: 'heading', text: 'Chifles y patacones: el snack perfecto' },
      { type: 'paragraph', text: 'Para los snacks fritos como chifles, patacones o papas fritas, cualquier lager ligera funciona perfectamente. La Club Verde o la Brahma acompañan estos bocados sin complicaciones y a precios muy accesibles.' },
      { type: 'list', items: ['Ceviche → Corona / Pilsener', 'Hornado → Modelo Negra / Stella Artois', 'Seco de pollo → Heineken', 'Chifles y patacones → Club Verde / Brahma', 'Mariscos a la plancha → Cusqueña Dorada'] },
    ],
  },
  {
    id: 'post-5',
    title: 'Guía para principiantes: tipos de cerveza',
    excerpt: 'Lager, Ale, Stout, IPA. Explicamos de forma sencilla las diferencias entre las familias de cerveza.',
    date: '05 Abr 2025',
    readTime: '5 min de lectura',
    category: 'Cultura',
    content: [
      { type: 'paragraph', text: 'Si eres nuevo en el mundo de la cerveza artesanal o simplemente quieres entender mejor lo que estás bebiendo, este artículo es para ti. Todo comienza con una división fundamental: Lager vs Ale.' },
      { type: 'heading', text: 'Lager: la más popular del mundo' },
      { type: 'paragraph', text: 'Las Lager se fermentan a bajas temperaturas con levaduras que trabajan en el fondo del tanque. El resultado es una cerveza limpia, suave y muy refrescante. La mayoría de cervezas comerciales que conocemos son Lager: Corona, Heineken, Modelo Especial, Pilsener.' },
      { type: 'list', items: ['Sabor: limpio, ligero, refrescante', 'Color: dorado a ámbar claro', 'Temperatura de servicio: muy fría (4-6°C)', 'Ejemplos: Corona, Heineken, Pilsener, Budweiser'] },
      { type: 'heading', text: 'Ale: la de carácter' },
      { type: 'paragraph', text: 'Las Ale se fermentan a temperatura ambiente con levaduras de superficie. Tienen sabores más complejos, afrutados o especiados. Incluyen estilos como IPA, Pale Ale, Porter y Stout.' },
      { type: 'heading', text: 'Stout: la cerveza oscura' },
      { type: 'paragraph', text: 'Las Stout son oscuras e intensas, con notas de café, chocolate y cacao. La Modelo Negra es técnicamente una Dunkel (lager oscura alemana) con características similares. Son perfectas para los meses más fríos o para acompañar postres.' },
      { type: 'heading', text: 'IPA: la del lúpulo' },
      { type: 'paragraph', text: 'India Pale Ale. Características por su intenso amargor y aroma a lúpulo con notas cítricas, resinosas o florales. Son la favorita de los amantes de la cerveza artesanal, aunque su intensidad puede ser un poco fuerte para los principiantes.' },
      { type: 'paragraph', text: 'En Reserva Beer Shop tenemos una selección que cubre desde las más accesibles y refrescantes hasta las más complejas e interesantes. No importa tu nivel de experiencia, siempre hay una cerveza perfecta para ti.' },
    ],
  },
  {
    id: 'post-6',
    title: 'Las novedades de la tienda: temporada 2025',
    excerpt: 'Las nuevas incorporaciones a nuestro catálogo y lo que recomendamos probar este mes.',
    date: '20 Mar 2025',
    readTime: '3 min de lectura',
    category: 'Novedades',
    content: [
      { type: 'paragraph', text: '¡Arrancamos el 2025 con todo! Hemos estado trabajando para ampliar y mejorar nuestro catálogo, y queremos compartir las novedades más importantes de esta temporada.' },
      { type: 'heading', text: 'Nuevas incorporaciones' },
      { type: 'paragraph', text: 'Este trimestre sumamos Sol (México) y Cusqueña Dorada (Perú) a nuestro catálogo de importadas. Sol es una lager ligera y fresca perfecta para los días soleados, mientras que Cusqueña trae el sabor andino con agua de los Andes peruanos.' },
      { type: 'list', items: ['Sol 355ml — México — $1.50', 'Cusqueña Dorada 330ml — Perú — $1.60', 'Brahma 355ml — Brasil — $1.10'] },
      { type: 'heading', text: 'Lo que recomendamos este mes' },
      { type: 'paragraph', text: 'Para mayo, nuestra recomendación del mes es la Modelo Negra. Con las tardes frescas que caracterizan este mes en Quito, su perfil de caramelo y malta tostada es el maridaje perfecto para una tarde en casa con buena música y amigos.' },
      { type: 'heading', text: 'Descuentos en pack' },
      { type: 'paragraph', text: '¿Organizas una reunión? Consulta por nuestros packs especiales por WhatsApp. Tenemos combos armados para grupos de 6, 12 y 24 personas con mezcla de marcas a precios especiales. Solo escríbenos y te armamos la selección perfecta.' },
      { type: 'paragraph', text: 'Como siempre, el servicio es personalizado y el delivery se coordina directamente contigo. ¡Gracias por elegirnos!' },
    ],
  },
];
