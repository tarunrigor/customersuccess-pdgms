
import React, { useState } from 'react';
import WeeklyReport from './WeeklyReport';

interface FeedbackSliderProps {
  label: string;
  options: {
    5: { color: string; text: string; icon: string };
    7: { color: string; text: string; icon: string };
    10: { color: string; text: string; icon: string };
  };
}

const FeedbackSlider: React.FC<FeedbackSliderProps> = ({ label, options }) => {
  const [score, setScore] = useState<number>(7);

  const getCurrentFeedback = () => {
    if (score <= 5) return options[5];
    if (score <= 8) return options[7];
    return options[10];
  };

  const feedback = getCurrentFeedback();

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 transition-all hover:shadow-2xl hover:border-indigo-100">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-xl font-bold text-slate-800 mb-1">{label}</h4>
          <p className="text-xs text-slate-400 font-medium">Drag the slider to share your sentiment</p>
        </div>
        <div className={`px-4 py-2 rounded-2xl text-white text-xs font-black shadow-lg transition-all duration-500 flex items-center gap-2 ${feedback.color}`}>
          <span className="text-lg">{feedback.icon}</span>
          {feedback.text.toUpperCase()}
        </div>
      </div>

      <div className="relative pt-6 pb-2 px-2">
        <input
          type="range"
          min="1"
          max="10"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
        />
        
        <div className="absolute top-0 w-full flex justify-between px-1 pointer-events-none">
          {[1, 5, 7, 10].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <span className="text-[10px] text-slate-300 font-black mb-1">{num}</span>
              <div className={`w-1.5 h-1.5 rounded-full ${num <= 5 ? 'bg-red-400' : num <= 7 ? 'bg-amber-400' : 'bg-green-400'}`} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Lowest Sentiment</span>
          <div className="flex flex-col items-center">
             <span className="text-2xl font-black text-slate-900">{score}</span>
             <span className="text-[10px] font-black text-slate-400 uppercase">Your Rating</span>
          </div>
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Highest Sentiment</span>
        </div>
      </div>
    </div>
  );
};

const CSATPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 animate-fade-in text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 text-5xl shadow-inner animate-bounce">✓</div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Message Received.</h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Jennifer (Org Head) and Sumit (Team Lead) have just received a push notification with your rating. 
          <span className="block mt-2 font-bold text-slate-700">Expect an update or acknowledgment within 24 business hours.</span>
        </p>
        <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100 w-full">
           <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">Immediate Escalation Path</p>
           <div className="flex justify-center gap-4 items-center opacity-60">
             <div className="text-center">
               <div className="w-8 h-8 rounded-full bg-slate-300 mx-auto mb-1" />
               <span className="text-[10px] font-bold">Feedback Sent</span>
             </div>
             <div className="h-[1px] w-8 bg-slate-300" />
             <div className="text-center">
               <div className="w-8 h-8 rounded-full bg-slate-300 mx-auto mb-1" />
               <span className="text-[10px] font-bold">Org Lead Review</span>
             </div>
             <div className="h-[1px] w-8 bg-slate-300" />
             <div className="text-center">
               <div className="w-8 h-8 rounded-full bg-slate-300 mx-auto mb-1" />
               <span className="text-[10px] font-bold">Priority Action</span>
             </div>
           </div>
        </div>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-12 px-8 py-3 text-slate-500 font-bold hover:text-slate-800 transition-colors"
        >
          View or edit submission
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-16">
      <section className="relative p-12 rounded-[3rem] bg-indigo-50 border border-indigo-100 overflow-hidden">
        {/* Abstract background blobs for premium feel */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-600 rounded-full mb-8 shadow-lg shadow-indigo-200">
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Executive Direct Line</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none">
            Your voice fuels <br/><span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-4">our performance.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            This rating bypasses standard reporting and goes straight to Jennifer's priority dashboard. We take every score seriously.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FeedbackSlider 
              label="Growth & Performance"
              options={{
                5: { color: 'bg-red-500', text: "Stagnant", icon: '⚠️' },
                7: { color: 'bg-amber-500', text: "Developing", icon: '📈' },
                10: { color: 'bg-indigo-600', text: "Outstanding", icon: '🚀' }
              }}
            />
            <FeedbackSlider 
              label="Team Partnership"
              options={{
                5: { color: 'bg-red-500', text: "Needs Shift", icon: '🤝' },
                7: { color: 'bg-amber-500', text: "Functional", icon: '💼' },
                10: { color: 'bg-indigo-600', text: "Exceptional", icon: '🌟' }
              }}
            />
          </div>

          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <label className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              What's on your mind?
            </label>
            <textarea 
              placeholder="Share specific wins, concerns, or things you want Sumit or Jennifer to address..."
              className="w-full h-40 p-6 rounded-3xl border-2 border-white bg-white/50 focus:bg-white focus:border-indigo-400 outline-none transition-all text-slate-700 shadow-inner"
            />
          </div>

          <div className="mt-12 flex flex-col items-center">
            <button 
              onClick={() => setSubmitted(true)}
              className="group relative w-full max-w-md py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-slate-800 hover:-translate-y-1 active:translate-y-0 transition-all shadow-2xl shadow-slate-300"
            >
              Submit to Executive Board
              <span className="absolute right-6 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <div className="mt-8 flex items-center gap-4 py-4 px-6 bg-white/40 rounded-2xl border border-white/60">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/32/32?random=5" className="w-8 h-8 rounded-full border-2 border-white" alt="Jennifer" title="Jennifer (Org Head)" />
                <img src="https://picsum.photos/32/32?random=6" className="w-8 h-8 rounded-full border-2 border-white" alt="Sumit" title="Sumit (Team Lead)" />
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-left">
                Both Jennifer (Org Head) and Sumit (Team Lead) <br/> will review this immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 pointer-events-none hover:pointer-events-auto origin-top scale-[0.98]">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-[1px] w-24 bg-slate-200" />
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Context: Last Week's Report</h2>
          <div className="h-[1px] w-24 bg-slate-200" />
        </div>
        <WeeklyReport />
      </section>
    </div>
  );
};

export default CSATPage;
