export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Mole<span className="text-cyan-400">Kula</span>
          </div>

          <div className="text-sm text-slate-400">
            AI-powered chemistry learning
          </div>
        </nav>

        {/* Hero section */}
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            🧪 Chemistry meets intelligence
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Where molecules meet{" "}
            <span className="text-cyan-400">intelligence.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Understand chemistry through your course material, molecular
            structures, reactions, and reliable scientific sources.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Upload Course Material
            </button>

            <button className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-white transition hover:bg-slate-800">
              Ask MoleKula
            </button>
          </div>

          {/* Tagline */}
          <div className="mt-16 text-sm font-medium tracking-[0.25em] text-slate-500">
            SEE IT. UNDERSTAND IT. FIND IT. LEARN IT.
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          MoleKula • Built for curious chemists
        </footer>
      </div>
    </main>
  );
}