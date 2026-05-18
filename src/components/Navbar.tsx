import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Cervezas', path: '/cervezas' },
    { name: 'Destacados', path: '/destacados' },
    { name: 'Mi Pedido', path: '/mi-pedido' },
    { name: 'Blog', path: '/blog' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `text-base font-medium transition-colors ${
      isActive
        ? 'text-color-accent border-b-2 border-color-accent pb-1'
        : 'text-color-muted hover:text-color-secondary pb-1 border-b-2 border-transparent'
    }`;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 border-b border-color-border-subtle transition-all duration-300 ${
        scrolled
          ? 'bg-color-primary/98 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-color-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-color-accent rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.06, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-color-primary font-black text-2xl italic">R</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-color-secondary text-xl font-bold tracking-tighter uppercase leading-none">
                Reserva
              </span>
              <span className="text-color-accent text-[9px] font-semibold tracking-widest uppercase mt-0.5">
                Beer Shop
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>
                {link.name}
              </Link>
            ))}
            <Link
              to="/cervezas"
              className="bg-color-accent text-color-primary px-6 py-2 rounded-full font-bold text-sm hover:brightness-90 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
            >
              Pedir Ahora
            </Link>

            <Link to="/mi-pedido" className="relative p-2 text-color-secondary hover:text-color-accent transition-colors">
              <ShoppingCart size={24} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-color-primary bg-color-accent rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Mobile cart + hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/mi-pedido" className="relative p-2 text-color-secondary">
              <ShoppingCart size={24} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-color-primary bg-color-accent rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <motion.button
              onClick={() => setIsOpen(prev => !prev)}
              className="text-color-secondary hover:text-color-accent transition-colors p-1"
              whileTap={{ scale: 0.9 }}
              aria-label="Abrir menú"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-color-surface-card border-b border-color-border-subtle overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 text-lg font-medium border-b border-color-border-subtle/50 ${
                      location.pathname === link.path ? 'text-color-accent' : 'text-color-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.2 }}
                className="pt-4"
              >
                <Link
                  to="/cervezas"
                  className="block w-full text-center bg-color-accent text-color-primary px-6 py-3 rounded-full font-semibold text-lg"
                >
                  Pedir Ahora
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
