import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import coronaImg from '../../img/Corona-png.png';
import modeloImg from '../../img/Modelo-png.png';
import heinekenImg from '../../img/Heineken-png.png';
import stellaImg from '../../img/Stella-png.png';
import budweiserImg from '../../img/Budweiser-png.png';
import solImg from '../../img/Sol-png.png';
import brahmaImg from '../../img/Brahma-png.png';
import cusquenaImg from '../../img/Cusquena-png.png';
import pilsenerImg from '../../img/Pilsener-png.png';
import clubImg from '../../img/Club-png.png';

const brandImages: Record<string, string> = {
  Corona: coronaImg,
  Modelo: modeloImg,
  Heineken: heinekenImg,
  'Stella Artois': stellaImg,
  Budweiser: budweiserImg,
  Sol: solImg,
  Brahma: brahmaImg,
  Cusqueña: cusquenaImg,
  Pilsener: pilsenerImg,
  Club: clubImg,
};

/* ── Visual por producto ── */
function ProductVisual({ product }: { product: Product }) {
  const img = brandImages[product.brand];
  if (img) {
    return (
      <img
        src={img}
        alt={product.name}
        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_6px_20px_rgba(0,0,0,0.18)] group-hover:drop-shadow-[0_8px_28px_rgba(198,241,53,0.28)]"
      />
    );
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col items-center justify-center gap-2 bg-color-surface-card">
      <span className="text-5xl drop-shadow-md">{product.imageFlag}</span>
      <span className="text-xs font-black uppercase tracking-widest text-color-muted text-center px-3">
        {product.brand}
      </span>
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
