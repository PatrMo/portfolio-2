import Lanyard from '../components/badge/Lanyard';
import GridDistortion from '../components/background/GridDistortion';
import RotatingText from '../components/ui/rotating-text';
import { Card } from '../components/ui/Card';
import { projects, Project } from '../data/projects';


export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen relative flex flex-col">
        {/* Background Layer */}
        <div className="fixed inset-0 z-[-1]">
          <GridDistortion
            imageSrc="bg.jpg"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="w-full h-full"
          />
        </div>

        {/* Main Flex Row: Lanyard and Info Column */}
        <div className="relative flex flex-col lg:flex-row h-full overflow-visible">
          {/* Left: Lanyard */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-screen relative z-0 overflow-visible">
            <div className="absolute inset-0 lg:-right-32 overflow-visible">
              <Lanyard position={[0, 1, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
          
          {/* Right: Info Boxes Stack */}
          <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center justify-center px-4 lg:px-8 py-14 mt-8 lg:mt-0 gap-8">
            {/* Introduction */}
            <section className="w-full max-w-xl z-10 relative overflow-hidden rounded-2xl border border-border/60 bg-background/65 p-6 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl lg:p-8 lg:text-left">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10" />
              <h1 className="relative mt-4 text-3xl font-bold leading-tight lg:text-4xl">
                Hello, I&apos;m Patrick.
              </h1>
              <p className="relative mt-4 text-base text-foreground/85 lg:text-lg">
                I&apos;m a software developer with a passion for building products that impact peoples lives.
              </p>
              <div className="relative mt-5 flex flex-wrap items-center justify-center gap-2 text-lg font-semibold lg:justify-start lg:text-2xl">
                <span className="text-foreground/90">I am interested in</span>
                <RotatingText
                  texts={[
                    'React',
                    'APIs',
                    'Cloud Infrastructure',
                    'Databases',
                    'Fullstack',
                    'Artificial Intelligence',
                  ]}
                  mainClassName="inline-flex px-3 sm:px-3 md:px-4 bg-[#232646]/80 dark:bg-[#E0E7E9]/80 text-background overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="first"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: 'spring', damping: 20, stiffness: 400 }}
                  rotationInterval={2200}
                />
              </div>
            </section>

            {/* Work Experience */}
            <section className="w-full max-w-xl z-10 relative overflow-hidden rounded-2xl border border-border/60 bg-background/65 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl lg:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10" />
              <div className="relative flex items-center justify-between gap-3 border-b border-border/60 pb-4">
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Work Experience</h2>
              </div>

              <div className="relative mt-5 flex flex-col gap-4">
                <article className="rounded-xl border border-border/60 bg-background/70 p-4 lg:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug lg:text-xl">
                      Software Developer Intern
                    </h3>
                    <span className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-foreground/60">Noble Solutions Enterprises Inc. &mdash; Mar 2026 &ndash; Present</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 lg:text-base">
                    Building a full-stack CRM from scratch using Vite and Supabase, with Google Cloud Platform handling OAuth and role-based access control. Designed an automated email system using Brevo&apos;s transactional API with custom subdomain logic.
                  </p>
                </article>

                <article className="rounded-xl border border-border/60 bg-background/70 p-4 lg:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug lg:text-xl">
                      Software Developer Intern
                    </h3>
                  </div>
                  <p className="mt-1 text-xs font-medium text-foreground/60">Playbook International Media Corp. &mdash; Mar 2025 &ndash; May 2025</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 lg:text-base">
                    Built an ETL pipeline using Python (Pandas, NumPy) to automate data entry across 200+ spreadsheets, reducing operational overhead by 25%. Engineered an NLP-based header-mapping framework achieving 95%+ accuracy across 30+ inconsistent column names.
                  </p>
                </article>

                <article className="rounded-xl border border-border/60 bg-background/70 p-4 lg:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug lg:text-xl">
                      Backend Developer
                    </h3>
                  </div>
                  <p className="mt-1 text-xs font-medium text-foreground/60">Google Developer Group McMaster &mdash; Sep 2024 &ndash; Apr 2025</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 lg:text-base">
                    Collaborated in an 8-person SCRUM team building a React Native app supporting 10,000+ users. Developed REST API endpoints, Dockerized and deployed to Google Kubernetes Engine, and architected a real-time friend list system in Firestore.
                  </p>
                </article>
              </div>
            </section>
          </div>
          {/*<img src="/jiggle.png" alt="Jiggle" className="hidden lg:block absolute bottom-[5rem] right-[35rem] w-50 h-50 lg:w-75 lg:h-75 z-10 rotate-45" /> */}
          
        </div>

        
        {/* Projects Cards */}
        <section className="mt-20 px-4 pb-14 lg:px-8">
          <div className="mx-auto mb-8 max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">Selected Projects</h2>
            <p className="mt-2 text-sm text-foreground/80 lg:text-base">
              Product builds, experiments, and shipped features.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj: Project) => (
              <Card
                key={proj.id}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                link={proj.link}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
