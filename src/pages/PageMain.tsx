import { useState } from "react";

export default function PageMain() {
  const [getMessage, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend() {
    if (!getMessage.trim()) return;

    setMessages((currentMessages) => [...currentMessages, getMessage]);
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white flex flex-col relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-red-700/10 rounded-full blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 h-20 px-7 flex items-center justify-between border-b border-white/[0.06] bg-black/40 backdrop-blur-2xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full" />

            <img
              src="/ICON.png"
              alt="Talked Chat"
              className="relative w-11 h-11 rounded-2xl object-cover border border-red-500/40 shadow-[0_0_25px_rgba(255,0,0,0.25)]"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Talked <span className="text-red-500">Chat</span>
            </h1>

            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />

              <span className="text-[11px] text-slate-500 tracking-widest uppercase">
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
          <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">
            Secure Connection
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_7px_#ef4444]" />
        </div>
      </header>

      {/* Chat */}
      <div className="relative z-10 flex-1 flex flex-col max-w-4xl w-full mx-auto">
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5">
          {messages.map((message, index) => (
            <div key={index} className="flex justify-end">
              <div className="group relative max-w-[75%]">
                <div className="absolute -inset-1 bg-red-600/10 blur-lg rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-gradient-to-br from-red-600 to-red-700 px-5 py-3.5 rounded-2xl rounded-br-md border border-red-400/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                  <p className="text-sm leading-relaxed text-white">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <div className="relative inline-flex mb-7">
                  <div className="absolute inset-0 bg-red-600/20 blur-[45px] rounded-full" />

                  <div className="relative w-20 h-20 rounded-3xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <img
                      src="/ICON.png"
                      alt="Talked Chat"
                      className="w-12 h-12 rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-bold tracking-tight">
                  Welcome to{" "}
                  <span className="text-red-500 drop-shadow-[0_0_18px_rgba(239,68,68,0.35)]">
                    Talked
                  </span>
                </h2>

                <p className="mt-3 text-sm text-slate-600">
                  Your conversation starts here.
                </p>

                <div className="mt-6 flex justify-center gap-2">
                  <span className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[10px] text-slate-600 uppercase tracking-widest">
                    Private
                  </span>

                  <span className="px-3 py-1.5 rounded-full border border-red-500/10 bg-red-500/[0.03] text-[10px] text-red-900 uppercase tracking-widest">
                    Encrypted
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-5 sm:p-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-600/10 blur-xl rounded-3xl opacity-0 focus-within:opacity-100 transition-opacity" />

            <div className="relative flex gap-2 p-2 rounded-2xl border border-white/[0.08] bg-[#090909]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] focus-within:border-red-500/40 transition-all">
              <input
                type="text"
                value={getMessage}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Write something..."
                className="flex-1 min-w-0 bg-transparent px-4 py-3.5 outline-none text-sm text-white placeholder:text-slate-700"
              />

              <button
                type="button"
                onClick={handleSend}
                className="group relative overflow-hidden px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]"
              >
                <span className="relative z-10 text-sm font-semibold">
                  Send
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center">
        <p className="text-[10px] text-slate-800 uppercase tracking-[0.3em]">
          Developed by{" "}
          <u className="text-slate-600 decoration-red-500/50 underline-offset-4">
            Guilherme Soares Marciel
          </u>
        </p>
      </footer>
    </main>
  );
}
