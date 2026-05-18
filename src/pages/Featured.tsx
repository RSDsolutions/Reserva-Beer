import { MessageCircle } from 'lucide-react';
import { products } from '../data';
import { ProductCard } from '../components/ProductCard';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function SectionReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Featured() {
  const otherProducts = products.filter(p => !['Corona', 'Modelo'].includes(p.brand)).slice(0, 4);

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
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Nuestros Favoritos</h1>
          <p className="text-color-muted text-lg max-w-2xl">Lo que más piden nuestros clientes.</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Corona Showcase */}
        <SectionReveal>
          <div className="bg-color-surface-card rounded-3xl border border-color-border-subtle overflow-hidden relative">
            <motion.div
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6F135]/5 rounded-full blur-[100px] pointer-events-none"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center relative z-10">
              <div>
                <motion.h2
                  className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Corona
                </motion.h2>
                <p className="text-2xl font-medium text-color-muted mb-8 italic">"La más refrescante"</p>

                <ul className="space-y-4 mb-10">
                  {['Corona 355ml', 'Corona Extra 710ml', 'Caja x24 355ml'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-lg">
                      <span className="w-2 h-2 rounded-full bg-color-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/593999999999?text=Hola!%20Quiero%20pedir%20cervezas%20Corona."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-color-accent text-color-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B0DC1A] hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle size={24} className="fill-current" />
                  Pedir Corona
                </a>
              </div>

              <div className="flex justify-center lg:justify-end h-full min-h-[360px] items-center">
                <motion.svg
                  width="150"
                  height="400"
                  viewBox="0 0 48 120"
                  className="text-color-border-subtle"
                  fill="currentColor"
                  animate={{ y: [0, -16, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                </motion.svg>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Modelo Showcase */}
        <SectionReveal delay={0.1}>
          <div className="bg-color-surface-card rounded-3xl border border-color-border-subtle overflow-hidden relative">
            <motion.div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center relative z-10">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start h-full min-h-[360px] items-end">
                <div className="flex items-end gap-8">
                  <motion.svg
                    width="120"
                    height="320"
                    viewBox="0 0 48 120"
                    className="text-color-border-subtle"
                    fill="currentColor"
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                  </motion.svg>
                  <motion.svg
                    width="120"
                    height="320"
                    viewBox="0 0 48 120"
                    className="text-[#D4AF37]/20"
                    fill="currentColor"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  >
                    <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                  </motion.svg>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:text-right">
                <motion.h2
                  className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Modelo
                </motion.h2>
                <p className="text-2xl font-medium text-color-muted mb-8 italic">"Sabor que conquista"</p>

                <ul className="space-y-4 mb-10 flex flex-col items-start lg:items-end w-full">
                  {['Modelo Especial 355ml', 'Modelo Negra 355ml', 'Caja x24 Especial / Negra'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-lg flex-row lg:flex-row-reverse">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/593999999999?text=Hola!%20Quiero%20pedir%20cervezas%20Modelo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-color-surface border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] hover:text-color-primary hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle size={24} className="fill-current" />
                  Pedir Modelo
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Comparison Table */}
        <SectionReveal delay={0.05}>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Cara a Cara</h3>
          <div className="overflow-x-auto rounded-xl border border-color-border-subtle">
            <table className="w-full text-left bg-color-surface-card overflow-hidden">
              <thead className="bg-color-surface border-b border-color-border-subtle">
                <tr>
                  <th className="p-6 font-semibold text-color-muted">Característica</th>
                  <th className="p-6 font-bold text-xl border-l border-color-border-subtle border-t-4 border-t-color-accent">
                    Corona
                  </th>
                  <th className="p-6 font-bold text-xl border-l border-color-border-subtle border-t-4 border-t-[#D4AF37]">
                    Modelo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-color-border-subtle">
                {[
                  ['Origen', '🇲🇽 México', '🇲🇽 México'],
                  ['Estilo', 'Pale Lager', 'Pilsner / Munich Dunkel'],
                  ['Vol. Alcohol', '4.5%', '4.4% – 5.4%'],
                  ['Formatos', '355ml, 710ml', '355ml'],
                  ['Precio Desde', '$1.50', '$1.75'],
                ].map(([label, corona, modelo], i) => (
                  <tr key={i} className={i === 4 ? 'text-color-accent font-bold' : ''}>
                    <td className="p-6 font-medium text-color-secondary">{label}</td>
                    <td className="p-6 border-l border-color-border-subtle">{corona}</td>
                    <td className="p-6 border-l border-color-border-subtle">{modelo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        {/* Other Popular */}
        <SectionReveal>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Otras Populares</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {otherProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
