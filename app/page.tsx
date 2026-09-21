"use client";

import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [backendMessage, setBackendMessage] = useState("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  async function testBackendConnection() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/test");
      const data = await response.json();

      setBackendMessage(data.message);
    } catch (error) {
      setBackendMessage("Could not connect to the MoleKula backend.");
    }
  }

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
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <label className="cursor-pointer rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Upload Course Material
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <button
              onClick={testBackendConnection}
              className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Ask MoleKula
            </button>
          </div>

          {/* Selected file */}
          {selectedFile && (
            <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900 px-5 py-3">
              <p className="text-sm text-slate-400">
                Selected course material:
              </p>

              <p className="mt-1 font-medium text-cyan-300">
                {selectedFile.name}
              </p>
            </div>
          )}

          {/* Backend connection message */}
          {backendMessage && (
            <div className="mt-6 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-5 py-3">
              <p className="text-sm text-cyan-300">{backendMessage}</p>
            </div>
          )}

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
