import { useParams, Link } from 'react-router-dom';
import { blogPosts, ContentBlock } from '../data';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

function renderBlock(block: ContentBlock, i: number) {
  if (block.type === 'heading') {
    return (
      <h2
        key={i}
        className="text-2xl font-black uppercase tracking-tight mt-12 mb-4 text-color-secondary"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === 'list' && block.items) {
    return (
      <ul key={i} className="space-y-2 my-4">
        {block.items.map((item, j) => (
          <li key={j} className="flex items-start gap-3 text-color-muted">
            <span className="w-2 h-2 rounded-full bg-color-accent shrink-0 mt-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={i} className="text-color-muted leading-relaxed">
      {block.text}
    </p>
  );
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-color-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
          <Link to="/blog" className="text-color-accent hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-color-primary min-h-screen pb-24">
      {/* Hero */}
      <div className="w-full h-[360px] md:h-[460px] bg-color-surface border-b border-color-border-subtle flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-color-accent/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.svg
          width="80"
          height="200"
          viewBox="0 0 48 120"
          className="text-color-border-subtle opacity-40"
          fill="currentColor"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
        </motion.svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Article header card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-color-surface-card border border-color-border-subtle rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-color-muted hover:text-color-accent mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Volver al blog
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-color-accent text-color-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-[0.95] uppercase tracking-tight">
            {post.title}
          </h1>

          <p className="text-color-muted text-lg leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex items-center text-sm font-medium text-color-muted gap-4 pt-6 border-t border-color-border-subtle">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-color-border-subtle" />
            <span>{post.readTime}</span>
          </div>
        </motion.div>

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16 space-y-5 text-lg"
        >
          {post.content.map((block, i) => renderBlock(block, i))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-color-surface border border-color-border-subtle p-8 rounded-2xl text-center mb-24"
        >
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4">¿Se te antojó una cerveza?</h3>
          <p className="text-color-muted mb-6">Pide ahora mismo y te la llevamos a casa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cervezas"
              className="inline-flex items-center justify-center gap-2 bg-color-accent text-color-primary px-8 py-4 rounded-full font-bold hover:bg-[#B0DC1A] hover:scale-105 active:scale-95 transition-all"
            >
              Ver catálogo
            </Link>
            <a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-color-secondary text-color-secondary px-8 py-4 rounded-full font-bold hover:bg-color-secondary hover:text-color-primary transition-all"
            >
              <MessageCircle size={20} className="fill-current" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Related posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-color-border-subtle pt-16">
        <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Te podría interesar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((related, i) => (
            <motion.div
              key={related.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link to={`/blog/${related.id}`} className="group block h-full">
                <div className="bg-color-surface-card border border-color-border-subtle rounded-2xl h-full flex flex-col overflow-hidden transition-colors hover:border-color-accent">
                  <div className="p-6">
                    <span className="text-[10px] bg-color-surface text-color-secondary border border-color-border-subtle px-2 py-1 rounded-full uppercase tracking-wider font-bold">
                      {related.category}
                    </span>
                    <h4 className="text-xl font-bold mt-4 mb-3 group-hover:text-color-accent transition-colors leading-tight">
                      {related.title}
                    </h4>
                    <p className="text-color-muted text-sm line-clamp-2">{related.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
