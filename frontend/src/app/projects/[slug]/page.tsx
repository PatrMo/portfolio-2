import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  getProjectSlugs,
} from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/70 px-3 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-background"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-background/70 shadow-xl backdrop-blur-sm">
          <div className="border-b border-border/60 bg-gradient-to-r from-sky-500/10 via-transparent to-cyan-500/10 px-6 py-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
              {project.status} · {project.year}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-foreground/85 lg:text-lg">
              {project.description}
            </p>
          </div>

          <div className="grid gap-8 px-6 py-6 lg:grid-cols-3 lg:px-8">
            <section className="lg:col-span-2">
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-lg border border-border/60 bg-background/65 px-4 py-3 text-sm text-foreground/85"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <aside>
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
