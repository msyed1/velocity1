
import React, { useState } from 'react';
import { generateProductRoadmap } from '../services/geminiService';
import { ProductRoadmap } from '../types';

const AIAdvisor: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<ProductRoadmap | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setError('');
    setRoadmap(null);
    try {
      const result = await generateProductRoadmap(idea);
      setRoadmap(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategist" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            Beta Feature
          </div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Velocity AI Strategist.</h2>
          <p className="text-white/50 text-lg">Enter your startup idea and our AI engine will generate a comprehensive product strategy and roadmap in seconds.</p>
        </div>

        <div className="glass p-6 md:p-10 rounded-[40px] border border-white/10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/40 mb-3 ml-2">Describe your product idea</label>
              <textarea 
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g. A marketplace for high-end digital real estate in the metaverse..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-indigo-500/50 transition-all min-h-[150px] resize-none"
              />
            </div>
            
            <button 
              onClick={handleGenerate}
              disabled={loading || !idea}
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                loading ? 'bg-white/5 text-white/20' : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-500/20'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Architecting your vision...
                </>
              ) : 'Generate Strategy'}
            </button>
          </div>

          {error && (
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {roadmap && (
            <div className="mt-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="border-t border-white/10 pt-10">
                <h3 className="text-3xl font-serif mb-2">{roadmap.title}</h3>
                <p className="text-white/60 leading-relaxed italic">{roadmap.vision}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Core MVP Features</h4>
                  <ul className="space-y-3">
                    {roadmap.mvpFeatures.map((feat, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/80">
                        <span className="text-indigo-500/50">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Recommended Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {roadmap.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Estimated Timeline</h4>
                  <p className="text-sm text-white/80">{roadmap.timeline}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Monetization Strategy</h4>
                  <p className="text-sm text-white/80">{roadmap.monetization}</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between">
                <p className="text-sm text-white/40 italic">Ready to build this? Let's chat.</p>
                <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">Book Discovery Call</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
