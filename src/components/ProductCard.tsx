import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import coronaImg from '../../img/Corona-png.png';
import modeloImg from '../../img/Modelo-png.png';

/* ── Brand colour config para visuals HTML ── */
const brandConfig: Record<string, { color: string; bg: string; text: string }> = {
  Heineken: {
    color: '#00A551',
    bg: 'linear-gradient(145deg, #00A55118 0%, #004d2630 100%)',
    text: '#00A551',
  },
  'Stella Artois': {
    color: '#003B6F',
    bg: 'linear-gradient(145deg, #003B6F18 0%, #001a3330 100%)',
    text: '#4d8cc7',
  },
  Budweiser: {
    color: '#BD0000',
    bg: 'linear-gradient(145deg, #BD000018 0%, #6b000030 100%)',
    text: '#e05555',
  },
  Club: {
    color: '#4CAF50',
    bg: 'linear-gradient(145deg, #4CAF5018 0%, #1b5e2030 100%)',
    text: '#4CAF50',
  },
  Pilsener: {
    color: '#D4AF37',
    bg: 'linear-gradient(145deg, #D4AF3718 0%, #7d651830 100%)',
    text: '#D4AF37',
  },
  Brahma: {
    color: '#0077B6',
    bg: 'linear-gradient(145deg, #0077B618 0%, #00356630 100%)',
    text: '#4daad9',
  },
  Cusqueña: {
    color: '#C0392B',
    bg: 'linear-gradient(145deg, #C0392B18 0%, #6b1a1530 100%)',
    text: '#d96d63',
  },
  Sol: {
    color: '#F39C12',
    bg: 'linear-gradient(145deg, #F39C1218 0%, #8B5E0830 100%)',
    text: '#F39C12',
  },
};

/* ── Visual por producto ── */
function ProductVisual({ product }: { product: Product }) {
  /* Imágenes reales */
  if (product.brand === 'Corona') {
    return (
      <img
        src={coronaImg}
        alt={product.name}
        className="h-full w-full object-contain drop-shadow-[0_6px_20px_rgba(198,241,53,0.18)] group-hover:drop-shadow-[0_8px_28px_rgba(198,241,53,0.38)] group-hover:scale-105 transition-all duration-500"
      />
    );
  }
  if (product.brand === 'Modelo') {
    return (
      <img
        src={modeloImg}
        alt={product.name}
        className="h-full w-full object-contain drop-shadow-[0_6px_20px_rgba(212,175,55,0.18)] group-hover:drop-shadow-[0_8px_28px_rgba(212,175,55,0.38)] group-hover:scale-105 transition-all duration-500"
      />
    );
  }

  /* Visuals HTML para el resto de marcas */
  const cfg = brandConfig[product.brand] ?? {
    color: '#888888',
    bg: 'linear-gradient(145deg, #88888818 0%, #44444430 100%)',
    text: '#888888',
  };

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden flex flex-col items-center justify-center gap-2"
      style={{ background: cfg.bg }}
    >
      {/* Silueta de botella de fondo */}
      <svg
        className="absolute opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500"
        width="80"
        height="200"
        viewBox="0 0 48 120"
        fill={cfg.color}
      >
        <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
      </svg>

      {/* Flag grande */}
      <span className="text-5xl relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
        {product.imageFlag}
      </span>

      {/* Nombre de marca */}
      <span
        className="text-xs font-black uppercase tracking-widest relative z-10 text-center px-3"
        style={{ color: cfg.text }}
      >
        {product.brand}
      </span>

      {/* Línea de color inferior */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] opacity-50 group-hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundColor: cfg.color }}
      />
    </div>
  );
}

/* ── ProductCard ── */
export function ProductCard({ product }: { product: Product; key?: string | number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (added) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-color-surface border border-color-border-subtle rounded-xl p-4 hover:border-color-accent transition-colors duration-300 flex flex-col h-full"
    >
      {/* Badges */}
      <div className="flex justify-between items-start mb-3">
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-color-surface-card px-2 py-1 rounded-full border border-color-border-subtle text-color-secondary">
          <span>{product.imageFlag}</span> {product.origin}
        </span>
        <span className="text-[10px] uppercase font-bold text-color-muted bg-color-surface-card px-2 py-1 rounded-full border border-color-border-subtle">
          {product.category}
        </span>
      </div>

      {/* Visual del producto */}
      <div className="bg-color-surface-card rounded-lg w-full h-48 mb-5 flex items-center justify-center relative overflow-hidden">
        <ProductVisual product={product} />
      </div>

      {/* Info */}
      <div className="mt-auto">
        <div className="mb-1">
          <span className="text-xs font-medium text-color-muted bg-color-surface-card px-2 py-0.5 rounded-full border border-color-border-subtle">
            {product.volume}
          </span>
        </div>
        <h3 className="text-lg font-bold text-color-secondary mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-color-accent font-bold text-xl">${product.price.toFixed(2)}</span>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.88 }}
            className={`relative text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide overflow-hidden min-w-[80px] transition-colors duration-300 ${
              added ? 'bg-green-500 text-white' : 'bg-color-accent text-color-primary hover:brightness-90'
            }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center gap-1"
                >
                  <Check size={12} strokeWidth={3} /> Listo
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  Agregar
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
