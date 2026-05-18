import { useState } from 'react';
import { products, bestsellersIds } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Todas', 'Nacionales', 'Importadas'];
const brands = [
  'Todas', 'Corona', 'Modelo', 'Heineken', 'Stella Artois',
  'Budweiser', 'Club', 'Pilsener', 'Brahma', 'Cusqueña', 'Sol',
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [activeBrand, setActiveBrand] = useState('Todas');
  const [sortParam, setSortParam] = useState('Relevancia');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredProducts = products.filter(p => {
    const matchCategory = activeCategory === 'Todas' || p.category === activeCategory;
    const matchBrand = activeBrand === 'Todas' || p.brand === activeBrand;
    return matchCategory && matchBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortParam === 'Precio: menor a mayor') return a.price - b.price;
    if (sortParam === 'Precio: mayor a menor') return b.price - a.price;
    if (sortParam === 'Más vendidos') {
      const rankA = bestsellersIds.indexOf(a.id);
      const rankB = bestsellersIds.indexOf(b.id);
      return (rankA === -1 ? 999 : rankA) - (rankB === -1 ? 999 : rankB);
    }
    return 0;
  });

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
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            Catálogo de Cervezas
          </h1>
          <p className="text-color-muted text-lg max-w-2xl">
            Nacionales, importadas y las mejores marcas del mundo.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 sticky top-20 bg-color-primary/95 backdrop-blur-sm z-30 py-4 border-b border-color-border-subtle">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Mobile toggle */}
            <div className="flex justify-between w-full lg:hidden mb-2">
              <button
                onClick={() => setShowFiltersMobile(prev => !prev)}
                className="flex items-center gap-2 bg-color-surface border border-color-border-subtle text-color-secondary px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:border-color-accent transition-colors"
              >
                <Filter size={16} /> Filtros
              </button>
              <span className="text-color-muted text-sm self-center">
                {sortedProducts.length} resultado{sortedProducts.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div
              className={`flex-col gap-6 w-full lg:flex lg:flex-row lg:items-center ${
                showFiltersMobile ? 'flex' : 'hidden md:flex'
              }`}
            >
              {/* Category */}
              <div className="flex flex-col gap-2 relative">
                <span className="text-[10px] font-bold text-color-muted uppercase tracking-widest absolute -top-4">
                  Categoría
                </span>
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={e => setActiveCategory(e.target.value)}
                    className="bg-color-surface border border-color-border-subtle text-color-secondary text-sm font-medium rounded-lg py-2 px-4 focus:ring-color-accent focus:border-color-accent block w-full outline-none appearance-none pr-8 cursor-pointer hover:border-color-muted transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-color-muted">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Brand pills */}
              <div className="flex flex-col gap-2 relative lg:border-l lg:border-color-border-subtle lg:pl-6">
                <span className="text-[10px] font-bold text-color-muted uppercase tracking-widest absolute -top-4 lg:left-6">
                  Marca
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                        activeBrand === brand
                          ? 'bg-color-accent border-color-accent text-color-primary shadow-[0_0_12px_rgba(198,241,53,0.3)]'
                          : 'bg-color-surface border-color-border-subtle text-color-secondary hover:border-color-muted'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto pt-4 lg:pt-0 border-t border-color-border-subtle lg:border-t-0 mt-2 lg:mt-0">
              <span className="text-[10px] font-bold text-color-muted uppercase tracking-widest shrink-0">
                Ordenar por:
              </span>
              <div className="relative w-full lg:w-auto">
                <select
                  value={sortParam}
                  onChange={e => setSortParam(e.target.value)}
                  className="bg-color-surface border border-color-border-subtle text-color-secondary text-sm font-medium rounded-lg py-2 px-4 focus:ring-color-accent focus:border-color-accent block w-full outline-none appearance-none pr-8 cursor-pointer hover:border-color-muted transition-colors"
                >
                  <option>Relevancia</option>
                  <option>Más vendidos</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-color-muted">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <span className="hidden lg:block text-color-muted text-xs shrink-0">
                {sortedProducts.length} resultado{sortedProducts.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          {sortedProducts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="col-span-full py-16 text-center bg-color-surface-card border border-color-border-subtle rounded-2xl"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 48 120"
                className="text-color-border-subtle mx-auto mb-6"
                fill="currentColor"
              >
                <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
              </svg>
              <p className="text-xl font-bold mb-2">No se encontraron cervezas</p>
              <p className="text-color-muted mb-6">Prueba cambiando los filtros seleccionados.</p>
              <button
                onClick={() => {
                  setActiveCategory('Todas');
                  setActiveBrand('Todas');
                }}
                className="text-color-accent border border-color-accent px-6 py-2 rounded-full font-bold text-sm hover:bg-color-accent hover:text-color-primary transition-colors"
              >
                Limpiar filtros
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-24"
            >
              <AnimatePresence>
                {sortedProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
