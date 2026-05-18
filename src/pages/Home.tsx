import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, MessageCircle, Truck } from 'lucide-react';
import { products } from '../data';
import coronaImg from '../../img/Corona-png.png';
import modeloImg from '../../img/Modelo-png.png';
import { ProductCard } from '../components/ProductCard';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const heroWords = ['buscas', 'mereces', 'quieres'];
const marqueeItems = [
  '🇲🇽 Corona', '🇲🇽 Modelo', '🇳🇱 Heineken', '🇧🇪 Stella Artois',
  '🇺🇸 Budweiser', '🇪🇨 Club Verde', '🇪🇨 Pilsener', '🇧🇷 Brahma',
  '🇵🇪 Cusqueña', '🇲🇽 Sol',
];

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
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(to);
    };
    requestAnimationFrame(animate);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const topProducts = products
    .filter(p => ['Corona', 'Modelo Especial', 'Corona Extra', 'Heineken'].includes(p.name))
    .slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % heroWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-color-primary">
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pt-20 pb-32 min-h-[90vh] flex items-center">
        {/* Animated background glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-color-accent/5 rounded-full blur-[110px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute right-0 top-1/4 w-[300px] h-[300px] border border-color-accent/15 rounded-full pointer-events-none" />
        <motion.div
          className="absolute right-10 top-1/3 w-[420px] h-[420px] border border-color-accent/08 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <motion.div
              className="space-y-8 z-10 relative"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="px-3 py-1 border border-color-accent text-color-accent text-[10px] font-bold uppercase tracking-widest inline-block w-fit rounded-full"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Delivery disponible en Quito
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black text-color-secondary tracking-tighter uppercase leading-[0.9]">
                La cerveza que{' '}
                <br className="hidden md:block" />
                <span className="inline-block" style={{ minWidth: '7ch' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="text-color-accent inline-block"
                      initial={{ y: 56, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -56, opacity: 0 }}
                      transition={{ duration: 0.36, ease: [0.76, 0, 0.24, 1] }}
                    >
                      {heroWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                ,{' '}
                <br className="hidden md:block" />
                en tu puerta.
              </h1>

              <motion.p
                className="text-lg text-color-muted max-w-md font-medium leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Importadas, nacionales y las mejores marcas del mundo. Tu selección premium con pedido fácil por WhatsApp.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/cervezas"
                  className="inline-flex justify-center items-center gap-2 bg-color-accent text-color-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
                >
                  Ver Catálogo
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-color-secondary text-color-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-color-secondary hover:text-color-primary transition-all"
                >
                  ¿Cómo funciona?
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 pt-2 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {['🍺 Corona', '🍺 Modelo', '🌎 Importadas & Nacionales'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="bg-color-surface border border-color-border-subtle px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: animated bottles */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center p-8">
                <motion.div
                  className="absolute w-[360px] h-[360px] bg-color-accent opacity-[0.07] blur-[70px] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute w-[480px] h-[480px] border border-color-accent/15 rounded-full" />
                <motion.div
                  className="absolute w-[360px] h-[360px] border border-color-accent/08 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative flex gap-6 items-end">
                  {/* Bottle 1 – Corona */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-40 h-72 bg-color-surface border border-color-border-subtle rounded-2xl flex flex-col items-center p-4 shadow-2xl -rotate-3 cursor-pointer hover:rotate-0 transition-transform duration-300 group"
                  >
                    <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
                      <img
                        src={coronaImg}
                        alt="Corona"
                        className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(198,241,53,0.15)] group-hover:drop-shadow-[0_8px_32px_rgba(198,241,53,0.35)] transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-[9px] text-color-accent font-bold uppercase tracking-widest block">Corona</span>
                      <p className="text-xs font-bold text-color-secondary">Extra 355ml</p>
                      <p className="text-color-accent font-black text-lg mt-1">$1.50</p>
                    </div>
                  </motion.div>

                  {/* Bottle 2 – Modelo */}
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                    className="w-40 h-72 bg-color-surface border border-color-border-subtle rounded-2xl flex flex-col items-center p-4 shadow-2xl rotate-3 cursor-pointer hover:rotate-0 transition-transform duration-300 group mb-10"
                  >
                    <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
                      <img
                        src={modeloImg}
                        alt="Modelo"
                        className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(212,175,55,0.15)] group-hover:drop-shadow-[0_8px_32px_rgba(212,175,55,0.35)] transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-[9px] text-color-accent font-bold uppercase tracking-widest block">Modelo</span>
                      <p className="text-xs font-bold text-color-secondary">Especial 355ml</p>
                      <p className="text-color-accent font-black text-lg mt-1">$1.75</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── Stats ───── */}
      <section className="py-14 border-y border-color-border-subtle bg-color-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Entregas realizadas' },
              { value: 12, suffix: '+', label: 'Marcas disponibles' },
              { value: '4.9★', label: 'Valoración promedio', isStatic: true },
              { value: 30, suffix: 'min', label: 'Tiempo de respuesta' },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-color-accent tracking-tighter">
                  {stat.isStatic ? (
                    stat.value as string
                  ) : (
                    <AnimatedCounter to={stat.value as number} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-color-muted text-sm font-medium mt-2">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Brand marquee ───── */}
      <section className="py-6 overflow-hidden border-b border-color-border-subtle bg-color-primary select-none">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-color-muted/40 font-bold uppercase tracking-widest text-sm whitespace-nowrap mx-8 hover:text-color-accent transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section
        id="como-funciona"
        className="py-24 bg-color-surface border-y border-color-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-[11px] text-color-muted uppercase tracking-widest font-bold block mb-3">
              Simple y rápido
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Así de fácil</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[52px] left-1/6 right-1/6 h-[1px] bg-color-border-subtle -z-10" />

            {[
              {
                num: '01',
                icon: ShoppingBag,
                title: 'Elige tu cerveza',
                desc: 'Explora nuestro catálogo y selecciona lo que quieres tomar.',
              },
              {
                num: '02',
                icon: MessageCircle,
                title: 'Escríbenos por WhatsApp',
                desc: 'Confirma tu pedido rápidamente mediante un mensaje.',
              },
              {
                num: '03',
                icon: Truck,
                title: 'Recíbela en casa',
                desc: 'Coordinamos la entrega para que disfrutes sin salir.',
              },
            ].map((step, idx) => (
              <SectionReveal key={idx} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-color-surface-card border border-color-border-subtle p-8 rounded-2xl text-center relative z-10 group hover:border-color-accent transition-colors duration-300"
                >
                  <span className="text-5xl font-black text-color-accent/20 absolute top-4 right-6 group-hover:text-color-accent/40 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-16 h-16 bg-color-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-color-border-subtle">
                    <step.icon size={28} className="text-color-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-color-muted text-sm">{step.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Top Products ───── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex justify-between items-end mb-12 border-b border-color-border-subtle pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-color-muted uppercase tracking-widest font-bold">
                  Populares ahora
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Lo Más Pedido</h2>
              </div>
              <Link
                to="/cervezas"
                className="hidden sm:flex items-center gap-2 text-color-accent hover:text-color-secondary font-bold uppercase tracking-widest text-[11px] transition-colors"
              >
                Ver todas <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map((product, i) => (
              <SectionReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/cervezas"
              className="inline-flex items-center gap-2 text-color-accent hover:text-color-secondary font-medium transition-colors"
            >
              Ver todas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Brand Spotlight ───── */}
      <section className="py-24 bg-color-surface border-y border-color-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12">
            <span className="text-[11px] text-color-muted uppercase tracking-widest font-bold block mb-2">
              Nuestras estrellas
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Marcas Destacadas</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal delay={0.05}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="bg-color-surface-card rounded-2xl border border-color-border-subtle p-8 md:p-12 relative overflow-hidden group h-full"
              >
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-[#C6F135]/5 rounded-full blur-[60px]"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <h3 className="text-3xl font-black mb-2 text-color-secondary">Corona</h3>
                <p className="text-color-muted mb-8 max-w-xs">
                  La cerveza mexicana de mayor venta en el mundo. Fina y refrescante.
                </p>
                <Link
                  to="/destacados"
                  className="inline-block bg-color-surface border border-color-border-subtle text-color-secondary px-6 py-3 rounded-full text-sm font-semibold hover:border-color-accent hover:text-color-accent transition-colors"
                >
                  Ver opciones
                </Link>
                <motion.svg
                  width="120"
                  height="300"
                  viewBox="0 0 48 120"
                  className="absolute -right-4 -bottom-16 text-color-border-subtle"
                  fill="currentColor"
                  animate={{ rotate: [12, 7, 12] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                </motion.svg>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="bg-color-surface-card rounded-2xl border border-color-border-subtle p-8 md:p-12 relative overflow-hidden group h-full"
              >
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[60px]"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <h3 className="text-3xl font-black mb-2 text-color-secondary">Modelo</h3>
                <p className="text-color-muted mb-8 max-w-xs">
                  Especial o Negra. El sabor que conquista todos los paladares.
                </p>
                <Link
                  to="/destacados"
                  className="inline-block bg-color-surface border border-color-border-subtle text-color-secondary px-6 py-3 rounded-full text-sm font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  Ver opciones
                </Link>
                <motion.svg
                  width="120"
                  height="300"
                  viewBox="0 0 48 120"
                  className="absolute -right-4 -bottom-16 text-color-border-subtle"
                  fill="currentColor"
                  animate={{ rotate: [-12, -7, -12] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                </motion.svg>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-[11px] text-color-muted uppercase tracking-widest font-bold block mb-3">
              Lo que dicen
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Nuestros Clientes</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Increíble servicio. Las cervezas llegaron heladas y en menos del tiempo esperado.',
                name: 'Carlos M.',
                city: 'Quito Norte',
              },
              {
                quote: 'Me encanta la variedad de importadas que tienen. Siempre hay algo nuevo para probar.',
                name: 'Daniela R.',
                city: 'Cumbayá',
              },
              {
                quote: 'El proceso por WhatsApp es súper ágil. 100% recomendados para las previas.',
                name: 'Andrés V.',
                city: 'Centro Norte',
              },
            ].map((t, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-color-surface border border-color-border-subtle p-8 rounded-2xl h-full hover:border-color-accent/40 transition-colors duration-300"
                >
                  <div className="text-4xl text-color-accent font-serif mb-4">"</div>
                  <p className="text-color-secondary text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="text-color-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-color-muted font-medium text-sm">
                    {t.name} <span className="opacity-50 mx-1">•</span> {t.city}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WhatsApp CTA ───── */}
      <section className="py-12 mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-color-surface-card border border-color-border-subtle border-l-[6px] border-l-color-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Prefieres pedir por WhatsApp?</h2>
                <p className="text-color-muted text-lg">Atención personalizada, respuesta rápida.</p>
              </div>
              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center gap-2 bg-color-accent text-color-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B0DC1A] transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={24} className="fill-current" />
                Escribir ahora
              </a>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
