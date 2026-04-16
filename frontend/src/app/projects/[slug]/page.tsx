import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, Globe, Trophy, type LucideIcon } from "lucide-react";

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

  const externalLinks = [
    {
      url: project.externalLinks?.github,
      label: "GitHub",
      Icon: Github,
    },
    {
      url: project.externalLinks?.devpost,
      label: "Devpost",
      Icon: Trophy,
    },
    {
      url: project.externalLinks?.website,
      label: "Project Website",
      Icon: Globe,
    },
  ].filter(
    (
      link
    ): link is {
      url: string;
      label: string;
      Icon: LucideIcon;
    } => Boolean(link.url)
  );

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
            {externalLinks.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {externalLinks.map(({ url, label, Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${label}`}
                    title={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/75 text-foreground/85 transition-colors hover:bg-background"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
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
