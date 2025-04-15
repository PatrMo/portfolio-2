import Lanyard from '../components/badge/Lanyard';

export default function Home() {
  return (
    <main className="relative">
      {/* Lanyard Section - positioned absolutely */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[400px] lg:h-screen z-0">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Content container - with padding to account for navbar */}
      <div className="pt-14 flex flex-col lg:flex-row items-start justify-center min-h-screen px-4 lg:px-8">
        {/* Spacer div to maintain layout with absolute lanyard */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-screen"></div>
        
        {/* Text Section - with z-index to appear above lanyard */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 text-center lg:text-left z-10 relative">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Hello, I'm Patrick!
          </h1>
          <p className="text-lg lg:text-xl">
            This is placeholder text and will look so freaking cool later.
          </p>
        </div>
      </div>
    </main>
  );
}