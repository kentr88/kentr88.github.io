"use client";


export default function Home() {
    const projects = [
    {
        name: "3D Graphics Engine",
        description: "This project is an implementation of a 3D Graphics Engine, originally developed by Javidx9 on YouTube. The original version was designed to work in the console, but this version has been adapted to use OpenGL, a powerful cross-platform graphics API.",
        features: ["Loads 3D models from files", "4x4 View Matrix and Camera Implementation", "Keyboard and Mouse Controls", "Triangle Clipping"],
        images: ["https://github.com/kentr88/Basic-3D-Viewer/raw/master/image/read/1713924959996.png", "https://github.com/kentr88/Basic-3D-Viewer/raw/master/image/read/1713925104265.png"],
    },
    {
        name: "2D Minecraft Clone",
        description: "Basic 2D block game using C++ and OpenGL, that incorperates perlin noise terrain generation, physics and block placement. Also build in python.",
        features: ["Perlin Noise Terrain Generation", "Player physics", "Screen shifts to player", "Block remove/place"],
        images: ["https://github.com/kentr88/2D-Minecraft-Clone/raw/main/image/README/1714104734377.png"],
    },
    {
        name: "Calculator App",
        description: "Implementation of the mac calculator app using SFML in C++, supporting basic operations and keyboard input",
        features: ["Supports cursor and keyboard input", "Max number length 10", "Numbers shrink to fit"],
        images: ["https://github.com/kentr88/SFML-Calculator/raw/master/image/README/1714104445534.png"],
    },
    {
        name: "Matlab Battleships",
        description: "This MATLAB implementation of Battleships utilizes the image function to create a graphical user interface (GUI) for the game board. The game is played on a grid where players strategically place their ships and attempt to sink their opponent's fleet by guessing coordinates.",
        features: ["Single and Multiplayer Modes", "3 Difficulty Levels", "4 ship types", "10x10 board"],
        images: ["https://github.com/kentr88/Battleships-Matlab/raw/master/image/README/1714090834379.png", "https://github.com/kentr88/Battleships-Matlab/raw/master/image/README/1714090969070.png", "https://github.com/kentr88/Battleships-Matlab/raw/master/image/README/1714091034870.png"],
    },
    ];
    
  return (
      <main className="flex flex-col gap-8 items-center p-4 ms:p-10 w-full mt-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="flex flex-col gap-20 w-full max-w-4xl">
            {projects.map((project, index) => (
            <div key={index} className="border-t pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                {/* Left Column: Name and Description */}
                <div>
                    <h2 className="text-2xl font-semibold">{project.name}</h2>
                    <p className="mt-2 text-md">{project.description}</p>
                    {project.features && (
                        <>
                        <h4 className="mt-4 text-lg font-semibold">Features</h4>
                        <ul className="list-disc list-inside mt-2">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                        </ul>
                        </>
                    )}
                </div>
                {/* Right Column: Image */}
                <div>
                    <img
                    src={project.image}
                    alt={`${project.name} image`}
                    className="w-full rounded shadow"
                    />
                </div>
                </div>
            </div>
            ))}
        </div>
      </main>
  );
}
