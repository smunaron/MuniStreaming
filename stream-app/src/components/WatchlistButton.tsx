"use client";

import { useState, useEffect } from "react";
import { BookmarkPlus, BookmarkCheck } from "lucide-react";

interface WatchlistButtonProps {
  showId: string;
}

function getWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("watchlist") ?? "[]");
  } catch {
    return [];
  }
}

export default function WatchlistButton({ showId }: WatchlistButtonProps) {
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    setInWatchlist(getWatchlist().includes(showId));
  }, [showId]);

  const toggle = () => {
    const current = getWatchlist();
    const updated = inWatchlist
      ? current.filter((id) => id !== showId)
      : [...current, showId];
    localStorage.setItem("watchlist", JSON.stringify(updated));
    setInWatchlist(!inWatchlist);
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
        inWatchlist
          ? "bg-pink-600/20 text-pink-400 border border-pink-600/40 hover:bg-pink-600/30"
          : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
      }`}
    >
      {inWatchlist ? <BookmarkCheck size={18} /> : <BookmarkPlus size={18} />}
      {inWatchlist ? "Opgeslagen" : "Toevoegen aan watchlist"}
    </button>
  );
}
