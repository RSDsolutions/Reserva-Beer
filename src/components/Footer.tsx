import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

// Using a custom TikTok icon using SVG
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.1 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-color-primary border-t border-color-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              <Link to="/" className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-color-accent rounded-lg flex items-center justify-center">
                   <span className="text-color-primary font-black text-2xl italic">R</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-color-secondary text-xl font-bold tracking-tighter uppercase leading-none">Reserva</span>
                   <span className="text-color-accent text-[9px] font-semibold tracking-widest uppercase mt-0.5">Beer Shop</span>
                 </div>
              </Link>
            </div>
            <p className="text-color-muted font-medium">La mejor selección, en tu puerta.</p>
            <p className="text-color-muted text-sm pt-4">Delivery disponible en Quito, Ecuador</p>
          </div>

          {/* Center Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <Link to="/" className="block text-color-muted hover:text-color-accent transition-colors">Inicio</Link>
              <Link to="/cervezas" className="block text-color-muted hover:text-color-accent transition-colors">Cervezas</Link>
              <Link to="/destacados" className="block text-color-muted hover:text-color-accent transition-colors">Destacados</Link>
            </div>
            <div className="space-y-3">
              <Link to="/mi-pedido" className="block text-color-muted hover:text-color-accent transition-colors">Mi Pedido</Link>
              <Link to="/blog" className="block text-color-muted hover:text-color-accent transition-colors">Blog</Link>
              <Link to="/nosotros" className="block text-color-muted hover:text-color-accent transition-colors">Nosotros</Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <a 
              href="https://wa.me/593999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-color-accent text-color-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform w-full uppercase tracking-wide text-sm"
            >
              <MessageCircle size={20} className="fill-current" />
              Pedir por WhatsApp
            </a>
            
            <div className="flex items-center justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-color-secondary flex items-center justify-center text-color-primary hover:bg-color-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-color-secondary flex items-center justify-center text-color-primary hover:bg-color-accent transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-color-secondary flex items-center justify-center text-color-primary hover:bg-color-accent transition-colors">
                <Facebook size={20} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-color-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-color-muted">
          <p>© 2025 Reserva Beer Shop</p>
          <p>Quito, Ecuador</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
