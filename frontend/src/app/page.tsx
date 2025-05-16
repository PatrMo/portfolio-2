import Lanyard from '../components/badge/Lanyard';
import GridDistortion from '../components/background/GridDistortion';
import RotatingText from '../components/ui/rotating-text';

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen">
        {/* GridDistortion Background */}
        <div className="absolute inset-0 z-[-1]">
          <GridDistortion
            imageSrc='bg.jpg'
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="w-full h-full"
          />
        </div>

        {/* Lanyard Section - positioned absolutely */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[400px] lg:h-screen z-0">
          <Lanyard position={[0, 1, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* Content container - with padding to account for navbar */}
        <div className="pt-14 flex flex-col lg:flex-row items-start justify-center min-h-screen px-4 lg:px-8">
          {/* Spacer div to maintain layout with absolute lanyard */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-screen"></div>          
            <div className="w-full lg:w-1/2 p-4 lg:p-8 text-center lg:text-left z-10 relative rounded-2xl bg-background/60 hover:bg-background/80 transition-colors duration-200">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Hello, I&apos;m Patrick!
              </h1>
              <div className="text-xl lg:text-2xl font-bold inline-flex items-center space-x-2">
                <span>I am interested in</span>
                <RotatingText
                  texts={['React', 'APIs', 'Cloud Infrastructure', 'Databases', 'Fullstack', 'Artificial Intelligence']}
                  mainClassName="inline-flex px-2 sm:px-2 md:px-3 bg-[#232646]/80 dark:bg-[#E0E7E9]/80 text-background overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="first"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
