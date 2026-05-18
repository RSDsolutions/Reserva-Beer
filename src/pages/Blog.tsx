import { Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

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
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Blog Cervecero</h1>
          <p className="text-color-muted text-lg max-w-2xl">Historias, novedades y cultura de la cerveza.</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Link to={`/blog/${featuredPost.id}`} className="group block">
              <div className="bg-color-surface-card border border-color-border-subtle rounded-3xl overflow-hidden md:flex min-h-[400px] hover:border-color-accent transition-colors duration-300">
                <div className="md:w-1/2 bg-color-surface relative flex justify-center items-center p-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-color-accent/5 rounded-full blur-[60px] pointer-events-none" />
                  <motion.svg
                    width="60"
                    height="150"
                    viewBox="0 0 48 120"
                    className="text-color-muted"
                    fill="currentColor"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                  </motion.svg>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-color-accent text-color-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Destacado
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block bg-color-surface border border-color-border-subtle text-color-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-color-accent transition-colors leading-[0.9] tracking-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-color-muted text-lg mb-8 line-clamp-2">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm font-medium text-color-muted gap-4">
                      <span>{featuredPost.date}</span>
                      <span className="w-1 h-1 rounded-full bg-color-border-subtle" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span className="hidden sm:flex items-center gap-1 text-color-accent text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                      Leer <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {gridPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <div className="bg-color-surface-card border border-color-border-subtle rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-color-accent hover:-translate-y-1">
                  <div className="bg-color-surface h-48 relative flex justify-center items-center border-b border-color-border-subtle overflow-hidden">
                    <motion.svg
                      width="40"
                      height="100"
                      viewBox="0 0 48 120"
                      className="text-color-border-subtle group-hover:text-color-muted transition-colors duration-500"
                      fill="currentColor"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      <path d="M19.5 0h9v16c0 5 4 8 7 12s5 9 5 16v72c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-72c0-7 2-12 5-16s7-7 7-12v-16z" />
                    </motion.svg>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="text-[10px] bg-color-surface text-color-secondary border border-color-border-subtle px-2 py-1 rounded-full uppercase tracking-wider font-bold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-3 group-hover:text-color-accent transition-colors tracking-tight leading-[1.1]">
                      {post.title}
                    </h3>
                    <p className="text-color-muted text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-xs font-medium text-color-muted pt-4 border-t border-color-border-subtle">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
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
