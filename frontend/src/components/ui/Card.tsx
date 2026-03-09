import Link from 'next/link';
import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  const hasImage = image && !image.includes('placeholder');
  const hasDescription = description && description.toLowerCase() !== 'placeholder';
  const initials = title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return (
    <Link
      href={link}
      className="group relative block overflow-hidden rounded-2xl border border-border/60 bg-background/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-2xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-emerald-500/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-32 overflow-hidden border-b border-border/60 bg-gradient-to-br from-zinc-900 to-zinc-700">
        {hasImage ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-between px-5">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">Project</span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-100">
              {initials || 'PR'}
            </span>
          </div>
        )}
      </div>

      <div className="relative p-5">
        <h2 className="mb-2 line-clamp-2 text-xl font-semibold leading-tight">{title}</h2>
        <p className="text-sm text-foreground/80">{hasDescription ? description : 'Detailed project write-up coming soon.'}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground/85">
          <span>View project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
};
