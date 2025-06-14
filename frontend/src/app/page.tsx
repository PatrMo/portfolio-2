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
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left: Lanyard */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-screen relative">
            <Lanyard position={[0, 1, 20]} gravity={[0, -40, 0]} />
          </div>
          
          {/* Right: Info Boxes Stack */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 lg:px-8 py-14 mt-[400px] lg:mt-0">
            {/* Hello Box */}
            <div className="w-full max-w-xl p-4 lg:p-8 text-center lg:text-left z-10 relative rounded-2xl bg-background/60 shadow-lg hover:bg-background/80 transition-colors duration-200">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Hello, I&apos;m Patrick!
              </h1>
              <p className="text-base lg:text-lg mb-4">
                I am a software developer with a passion for building projects and creating innovative solutions. 
              </p>
              <div className="text-xl lg:text-2xl font-bold inline-flex items-center space-x-2">
                <span>I am interested in</span>
                <RotatingText
                  texts={[
                    'React',
                    'APIs',
                    'Cloud Infrastructure',
                    'Databases',
                    'Fullstack',
                    'Artificial Intelligence',
                  ]}
                  mainClassName="inline-flex px-2 sm:px-2 md:px-3 bg-[#232646]/80 dark:bg-[#E0E7E9]/80 text-background overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
            </div>

            {/* More About Me Box */}
            <div className="mt-8 w-full max-w-xl p-4 lg:p-8 text-center lg:text-left z-10 relative rounded-2xl bg-background/60 shadow-lg hover:bg-background/80 transition-colors duration-200">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">Work Experience</h2>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">Playbook Media Inc -- Software Developer Intern</h3>
              <p className="text-base lg:text-lg">
                Playbook Media Inc.

              </p>
            </div>
          </div>
          {/*<img src="/jiggle.png" alt="Jiggle" className="hidden lg:block absolute bottom-[5rem] right-[35rem] w-50 h-50 lg:w-75 lg:h-75 z-10 rotate-45" /> */}
          
        </div>

        
        {/* Projects Cards */}
        <div className="mt-16 px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
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
      </div>
    </main>
  );
}
