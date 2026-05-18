import { Star, Target, MessageCircle, Heart, Truck, Users } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

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

export default function About() {
  return (
    <div className="bg-color-primary min-h-screen">
      {/* Mini Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-color-surface border-b border-color-border-subtle py-20 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-1/2 left-3/4 w-32 h-32 border border-color-accent/30 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-16 h-16 border border-color-accent/50 rounded-full" />
        </motion.div>
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-color-accent/20 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-color-accent/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            Sobre Reserva Beer Shop
          </h1>
          <p className="text-color-muted text-lg max-w-2xl">
            Conoce nuestra historia y por qué hacemos lo que hacemos.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="bg-color-surface-card border border-color-border-subtle rounded-3xl aspect-square flex flex-wrap content-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] to-[#222222] z-0" />
              <motion.div
                className="relative z-10 grid grid-cols-3 gap-6 opacity-20 group-hover:opacity-50 transition-opacity duration-700"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                {[...Array(9)].map((_, i) => (
                  <svg key={i} width="40" height="100" viewBox="0 0 48 120" fill="currentColor">
                    <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                  </svg>
                ))}
              </motion.div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[0.9] uppercase tracking-tight">
              Nacimos por amor a
              <br />
              la buena cerveza.
            </h2>
            <div className="space-y-6 text-lg text-color-muted leading-relaxed">
              <p>
                Todo comenzó en Quito, cuando un entusiasta de la cerveza se dio cuenta de lo difícil que era
                conseguir una buena selección de cervezas importadas y nacionales a domicilio, sin pagar precios
                exagerados o lidiar con apps complicadas.
              </p>
              <p>
                Así nació Reserva Beer Shop. Empezó curando las mejores marcas para compartir con amigos, y
                poco a poco se convirtió en la tienda de confianza para cientos de personas que buscan calidad,
                variedad y un trato directo.
              </p>
              <p>
                Nuestro modelo es simple: delivery-first y atención personalizada por WhatsApp. Sin
                intermediarios, asegurando que tu cerveza llegue rápida y lista para disfrutar.
              </p>
            </div>
          </SectionReveal>
        </section>

        {/* Values */}
        <section>
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Lo que nos define</h2>
            <p className="text-color-muted max-w-2xl mx-auto">
              Nuestros pilares para ofrecerte siempre el mejor servicio y producto.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Selección Cuidadosa',
                desc: 'No vendemos de todo, vendemos lo mejor. Cada marca en nuestro catálogo fue probada y elegida por su calidad.',
              },
              {
                icon: Users,
                title: 'Atención Personalizada',
                desc: 'Tratamos con personas, no con números de orden. Tu pedido por WhatsApp es gestionado por un humano.',
              },
              {
                icon: Truck,
                title: 'Delivery Confiable',
                desc: 'Coordinamos la entrega para que llegue en el momento exacto que la necesitas, sin sorpresas.',
              },
            ].map((value, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-color-surface border border-color-border-subtle p-8 rounded-2xl h-full hover:border-color-accent/40 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-color-surface-card border border-color-border-subtle rounded-full flex items-center justify-center mb-6">
                    <value.icon className="text-color-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-color-muted leading-relaxed">{value.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* How to order */}
        <SectionReveal>
          <div className="bg-color-surface-card border border-color-border-subtle rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12">¿Cómo hacer un pedido?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left relative">
              <div className="hidden md:block absolute top-[28px] left-1/6 right-1/6 h-[1px] bg-color-border-subtle -z-10" />

              {[
                {
                  n: '1',
                  title: 'Explora el Catálogo',
                  desc: 'Arma tu pedido en nuestra web agregando tus cervezas favoritas al carrito.',
                  link: '/cervezas',
                },
                {
                  n: '2',
                  title: 'Confirma en WhatsApp',
                  desc: 'Al confirmar, se generará un mensaje automático hacia nuestro número.',
                },
                {
                  n: '3',
                  title: 'Recibe y Disfruta',
                  desc: 'Coordinamos método de pago y dirección, y enviamos el pedido a tu puerta.',
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="bg-color-primary border border-color-border-subtle p-6 rounded-2xl relative"
                >
                  <div className="w-14 h-14 bg-color-surface rounded-full flex items-center justify-center font-bold text-xl text-color-accent mb-4 border border-color-border-subtle">
                    {step.n}
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-color-muted">{step.desc}</p>
                  {step.link && (
                    <Link
                      to={step.link}
                      className="mt-4 inline-flex text-color-accent text-xs font-bold uppercase tracking-wider hover:text-color-secondary transition-colors"
                    >
                      Ir al catálogo →
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-color-accent text-color-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B0DC1A] hover:scale-105 active:scale-95 transition-all mx-auto"
            >
              <MessageCircle size={24} className="fill-current" />
              Habla con nosotros
              <span className="text-sm font-medium bg-color-primary/10 px-2 py-0.5 rounded-md hidden sm:inline-block">
                +593 99 999 9999
              </span>
            </a>
          </div>
        </SectionReveal>

        {/* Mission / Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: 'Misión',
              text: '"Llevar la mejor cerveza nacional e importada a la puerta de nuestros clientes con rapidez y atención personalizada."',
            },
            {
              icon: Heart,
              title: 'Visión',
              text: '"Ser la tienda de cervezas de referencia en Quito, reconocida por calidad, variedad y servicio inigualable."',
            },
          ].map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-color-surface border border-color-border-subtle border-t-[4px] border-t-color-accent p-8 md:p-12 rounded-b-2xl rounded-t-sm h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <item.icon className="text-color-accent" size={32} />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-color-muted text-lg leading-relaxed">{item.text}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </section>
      </div>
    </div>
  );
}
