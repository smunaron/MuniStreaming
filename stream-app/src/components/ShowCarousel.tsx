"use client";

import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import ShowCard from "./ShowCard";
import type { Show } from "@/lib/supabase/types";

interface ShowCarouselProps {
  title: string;
  shows: Show[];
}

export default function ShowCarousel({ title, shows }: ShowCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  if (shows.length === 0) return null;

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scroll("right")}
          className="flex items-center gap-1 group"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
            {title}
          </h2>
          <ChevronRight
            size={22}
            className="text-pink-500 group-hover:translate-x-0.5 transition-transform mt-0.5"
          />
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-xs font-semibold text-pink-500 hover:text-pink-400 transition-colors"
        >
          Alles zien
        </button>
      </div>

      <div
        ref={scrollRef}
        className="carousel-scroll flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-2"
      >
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
