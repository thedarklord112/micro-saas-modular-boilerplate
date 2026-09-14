import React from 'react';
import { CheckCircle, Shield, Zap, ArrowRight, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
      {/* Header */}
      <header className="border-b border-slate-900 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-indigo-500 fill-indigo-500" />
          <span>ModularSaaS</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-sm text-slate-400 hover:text-slate-200 transition">Features</a>
          <a href="#pricing" className="text-sm text-slate-400 hover:text-slate-200 transition">Pricing</a>
          <a href="/login" className="text-sm border border-slate-800 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition font-medium">
            Sign In
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-900/60 text-indigo-400 px-3 py-1 rounded-full text-xs font-medium mb-6">
          <Star className="h-3 w-3 fill-indigo-400" /> Production-Ready Next.js Template
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Launch your next Micro-SaaS <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">in hours, not weeks</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
          The ultimate clean-architecture foundation equipped with pre-configured authentication, secure billing pipelines, and scalable database schemas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="/register" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition group shadow-lg shadow-indigo-600/20">
            Get Started Now <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#features" className="w-full sm:w-auto text-slate-300 hover:text-white font-medium px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/50 transition">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">Everything you need out-of-the-box</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-xl">
            <Shield className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Secure Authentication</h3>
            <p className="text-sm text-slate-400">Robust session management and identity routing handles email logins and OAuth providers safely via Supabase.</p>
          </div>
          <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-xl">
            <Zap className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Stripe Invoicing Webhooks</h3>
            <p className="text-sm text-slate-400">Production-tested payment webhooks dynamically verify, update, and manage recurring user access tiers automatically.</p>
          </div>
          <div className="border border-slate-900 bg-slate-900/20 p-6 rounded-xl">
            <CheckCircle className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Modular Monolith Path</h3>
            <p className="text-sm text-slate-400">Strict structural separation ensures your functional features scale gracefully without cross-contamination bottlenecks.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16 mb-20 border-t border-slate-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">Flexible and honest pricing</h2>
        <p className="text-sm text-slate-400 text-center mb-12">Pick the perfect plan to begin building your infrastructure.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Base Plan */}
          <div className="border border-slate-900 bg-slate-900/40 p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-slate-300 mb-2">Hobby Tier</h3>
              <div className="text-3xl font-extrabold text-white mb-6">$19<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> Basic core features access</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> Single database instance connection</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> Standard API traffic speeds</li>
              </ul>
            </div>
            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-lg transition text-sm">Subscribe</button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-indigo-600 bg-slate-900/40 p-8 rounded-xl flex flex-col justify-between relative">
            <div className="absolute -top-3 right-4 bg-indigo-600 text-white px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">Popular</div>
            <div>
              <h3 className="text-lg font-medium text-slate-300 mb-2">Pro Builder</h3>
              <div className="text-3xl font-extrabold text-white mb-6">$49<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> Unlimited project architectures</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> Dedicated high-frequency queries</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-indigo-500" /> 24/7 Priority development support</li>
              </ul>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition text-sm shadow-md shadow-indigo-600/10">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 max-w-7xl mx-auto px-6 py-8 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} ModularSaaS Template. Open-source under MIT License.
      </footer>
    </div>
  );
}
