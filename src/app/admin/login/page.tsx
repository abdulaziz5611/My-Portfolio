"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.refresh();
    router.push("/admin");
  }

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-5"
      >
        <div>
          <div className="flex items-center gap-1 font-extrabold text-2xl">
            <span>AA</span>
            <span className="block w-7 h-[3px] bg-[#ff4d4d] rounded-full ml-1" />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold">Admin Login</h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to manage your portfolio content.
          </p>
        </div>

        <div>
          <label className="text-[10px] font-semibold tracking-widest text-slate-500">
            EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d]"
          />
        </div>

        <div>
          <label className="text-[10px] font-semibold tracking-widest text-slate-500">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff4d4d]"
          />
        </div>

        {error && (
          <p className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full brand-gradient text-white font-semibold py-3 rounded-full shadow-md hover:opacity-95 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
