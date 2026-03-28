"use client";



// Option 1: 3D HEXAGON WAVE
export function HexagonWave() {


    const hexGrid = Array.from({ length: 24 });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center opacity-60">
            <div className="relative w-[150%] h-[150%] flex flex-wrap justify-center items-center gap-2 transform -rotate-12 scale-125">
                {hexGrid.map((_, i) => (
                    <div
                        key={i}
                        className="relative w-24 h-28 border-[3px] border-[#3AABB8] flex justify-center items-center backdrop-blur-sm"
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            animation: `hexFloat 8s ease-in-out infinite`,
                            animationDelay: `${(i % 6) * 0.4}s`,
                            background: "radial-gradient(circle, rgba(58,171,184,0.3) 0%, transparent 70%)"
                        }}
                    >
                        <div className="w-8 h-8 bg-[#A8D8DF] rounded-full blur-[10px] opacity-70" />
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes hexFloat {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
                    50% { transform: translateY(-40px) scale(1.15); opacity: 0.9; box-shadow: 0 0 30px #3AABB8; }
                }
            `}} />
        </div>
    );
}

// Option 2: 3D MOLECULAR NETWORK
export function FloatingMolecules() {


    // Use deterministic positions for hydration safety
    const nodes = [
        { left: "20%", top: "30%", z: 100, rot: 45 },
        { left: "70%", top: "20%", z: -200, rot: 120 },
        { left: "40%", top: "70%", z: 300, rot: 210 },
        { left: "80%", top: "60%", z: -50, rot: 330 },
        { left: "10%", top: "60%", z: 150, rot: 90 },
        { left: "50%", top: "10%", z: 0, rot: 15 },
        { left: "90%", top: "80%", z: -300, rot: 270 },
        { left: "30%", top: "90%", z: 250, rot: 180 },
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center perspective-[1200px] opacity-80">
            <div className="relative w-full h-full transform-style-3d animate-[rotateSpace_35s_linear_infinite]">
                {nodes.map((node, i) => (
                    <div
                        key={i}
                        className="absolute w-8 h-8 bg-[#A8D8DF] rounded-full shadow-[0_0_30px_#A8D8DF] flex items-center justify-center backdrop-blur-md"
                        style={{
                            left: node.left,
                            top: node.top,
                            transform: `translateZ(${node.z}px)`,
                            animation: `pulseNode 4s infinite alternate`,
                            animationDelay: `${i * 0.6}s`
                        }}
                    >
                        {/* Connecting Line (Pseudo-bond) */}
                        <div 
                            className="absolute w-[300px] h-[2px] bg-gradient-to-r from-[#3AABB8] to-transparent origin-left opacity-70"
                            style={{ transform: `rotate(${node.rot}deg)` }}
                        />
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-\\[1200px\\] { perspective: 1200px; }
                .transform-style-3d { transform-style: preserve-3d; }
                @keyframes rotateSpace {
                    0% { transform: rotateY(0deg) rotateX(15deg); }
                    100% { transform: rotateY(360deg) rotateX(-15deg); }
                }
                @keyframes pulseNode {
                    0% { transform: scale(0.8); opacity: 0.6; }
                    100% { transform: scale(1.3); opacity: 1; filter: brightness(1.5); }
                }
            `}} />
        </div>
    );
}

// Option 3: DYNAMIC DATA PULSE (ECG / Scanning Lines)
export function DynamicDataPulse() {


    const lines = Array.from({ length: 12 });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden flex flex-col justify-evenly opacity-90 mix-blend-screen scale-125 transform -rotate-12">
            {lines.map((_, i) => (
                <div key={i} className="relative w-full h-[2px] bg-[#1D6375]/40">
                    <div 
                        className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-[#A8D8DF] to-transparent shadow-[0_0_25px_#A8D8DF]"
                        style={{
                            animation: `scanLine 3s ease-in-out infinite`,
                            animationDelay: `${(i % 4) * 0.8}s`
                        }}
                    />
                </div>
            ))}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scanLine {
                    0% { left: -40%; opacity: 0; }
                    50% { opacity: 1; transform: scaleY(3); }
                    100% { left: 100%; opacity: 0; }
                }
            `}} />
        </div>
    );
}
