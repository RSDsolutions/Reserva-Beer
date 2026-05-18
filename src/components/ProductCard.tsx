import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';

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
      <div className="flex justify-between items-start mb-4">
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-color-surface-card px-2 py-1 rounded-full border border-color-border-subtle text-color-secondary">
          <span>{product.imageFlag}</span> {product.origin}
        </span>
        <span className="text-[10px] uppercase font-bold text-color-muted bg-color-surface-card px-2 py-1 rounded-full border border-color-border-subtle">
          {product.category}
        </span>
      </div>

      {/* Bottle visual */}
      <div className="bg-color-surface-card rounded-lg w-full h-48 mb-6 flex items-center justify-center relative overflow-hidden">
        <motion.svg
          width="48"
          height="120"
          viewBox="0 0 48 120"
          fill="currentColor"
          className="text-color-border-subtle group-hover:text-color-accent/20 transition-colors duration-500"
          whileHover={{ scale: 1.12, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
          <path
            d="M20 2h8v14.5c0 4.5 3.5 7.5 6.5 11s4.5 8 4.5 14.5v3h-30v-3c0-6.5 1.5-11 4.5-14.5s6.5-6.5 6.5-11v-14.5z"
            fill="#1A1A1A"
          />
        </motion.svg>
        <div className="absolute font-bold text-color-border-subtle/50 text-[10px] uppercase tracking-widest rotate-90">
          {product.name}
        </div>
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
