import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { items, updateQuantity, removeItem, cartTotal } = useCart();

  const handleConfirmOrder = () => {
    let message = `Hola! Quiero hacer un pedido en Reserva Beer Shop:\n\n`;
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} (${item.product.volume}) — $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal aprox: $${cartTotal.toFixed(2)}\n\nPor favor confírmenme disponibilidad y coordinar entrega. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const a = document.createElement('a');
    a.href = `https://wa.me/593999999999?text=${encodedMessage}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-color-primary min-h-screen">
      {/* Mini Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-color-surface border-b border-color-border-subtle py-16 relative overflow-hidden"
      >
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-color-accent/4 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Mi Pedido</h1>
          <p className="text-color-muted text-lg max-w-2xl">Revisa y confirma tu selección.</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            /* Empty state */
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-24 bg-color-surface-card border border-color-border-subtle rounded-2xl"
            >
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 48 120"
                className="text-color-border-subtle mb-8"
                fill="currentColor"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
              </motion.svg>
              <h2 className="text-2xl font-bold mb-2">Tu pedido está vacío</h2>
              <p className="text-color-muted mb-8">Agrega cervezas desde nuestro catálogo.</p>
              <Link
                to="/cervezas"
                className="inline-flex items-center gap-2 bg-color-accent text-color-primary px-6 py-3 rounded-full font-semibold hover:bg-[#B0DC1A] hover:scale-105 active:scale-95 transition-all"
              >
                Ver catálogo <ArrowRight size={20} />
              </Link>
            </motion.div>
          ) : (
            /* Cart with items */
            <motion.div
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Items list */}
              <div className="lg:col-span-8 space-y-4">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-color-surface-card border border-color-border-subtle p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6"
                    >
                      {/* Bottle icon */}
                      <div className="w-full sm:w-24 h-24 bg-color-surface rounded-lg flex items-center justify-center shrink-0 border border-color-border-subtle">
                        <svg
                          width="24"
                          height="60"
                          viewBox="0 0 48 120"
                          className="text-color-muted"
                          fill="currentColor"
                        >
                          <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                        </svg>
                      </div>

                      <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4">
                        <div className="text-center sm:text-left">
                          <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                            <span className="text-sm">{item.product.imageFlag}</span>
                            <span className="text-xs text-color-muted font-medium">{item.product.origin}</span>
                          </div>
                          <h3 className="text-lg font-bold">{item.product.name}</h3>
                          <p className="text-sm text-color-muted">{item.product.volume}</p>
                          <p className="text-color-accent font-semibold mt-1">
                            ${item.product.price.toFixed(2)} c/u
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Quantity control */}
                          <div className="flex items-center bg-color-primary border border-color-border-subtle rounded-full overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center text-color-secondary hover:bg-color-border-subtle transition-colors"
                              aria-label="Reducir cantidad"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center text-color-accent hover:bg-color-border-subtle transition-colors"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Subtotal */}
                          <div className="w-20 text-right font-bold text-lg">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>

                          {/* Remove */}
                          <motion.button
                            onClick={() => removeItem(item.product.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-color-muted hover:text-red-400 transition-colors"
                            aria-label="Eliminar item"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Continue shopping */}
                <div className="pt-4">
                  <Link
                    to="/cervezas"
                    className="inline-flex items-center gap-2 text-color-muted hover:text-color-accent text-sm font-medium transition-colors"
                  >
                    <ArrowRight size={14} className="rotate-180" /> Seguir explorando
                  </Link>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-4">
                <div className="bg-color-surface-card border border-color-border-subtle rounded-2xl p-6 lg:p-8 sticky top-24">
                  <h2 className="text-xl font-black uppercase tracking-tight mb-6">Resumen del Pedido</h2>

                  <div className="space-y-3 mb-6">
                    <AnimatePresence>
                      {items.map(item => (
                        <motion.div
                          key={`sum-${item.product.id}`}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-color-muted">
                            {item.quantity}x {item.product.name}
                          </span>
                          <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="border-t border-color-border-subtle pt-6 mb-8">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-medium text-color-muted">Subtotal estimado</span>
                      <motion.span
                        key={cartTotal}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-3xl font-black text-color-accent tracking-tighter"
                      >
                        ${cartTotal.toFixed(2)}
                      </motion.span>
                    </div>
                    <p className="text-xs text-color-muted text-right">Delivery a coordinar por WhatsApp</p>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      onClick={handleConfirmOrder}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 bg-color-accent text-color-primary px-6 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(198,241,53,0.2)] hover:bg-[#B0DC1A] transition-colors"
                    >
                      <MessageCircle size={22} className="fill-current" />
                      Confirmar por WhatsApp
                    </motion.button>
                    <p className="text-xs text-center text-color-muted">
                      Sin registro necesario. Tu pedido se confirma directamente por WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
