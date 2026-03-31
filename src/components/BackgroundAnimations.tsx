"use client";



// Option 1: 3D HEXAGON WAVE
export function HexagonWave() {


    const hexGrid = Array.from({ length: 24 });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center opacity-60 pointer-events-none">
            <div className="relative w-[150vw] h-[150vh] flex flex-wrap justify-center items-center gap-2 sm:gap-3 transform -rotate-12 scale-110 sm:scale-125">
                {hexGrid.map((_, i) => (
                    <div
                        key={i}
                        className={`relative w-20 h-24 sm:w-24 sm:h-28 border-[2px] sm:border-[3px] border-[#3AABB8] justify-center items-center backdrop-blur-sm will-change-transform ${i % 2 !== 0 ? 'hidden md:flex' : 'flex'}`}
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
            <div className="relative w-full h-full transform-style-3d animate-[rotateSpace_35s_linear_infinite] will-change-transform">
                {nodes.map((node, i) => (
                    <div
                        key={i}
                        className={`absolute w-6 h-6 sm:w-8 sm:h-8 bg-[#A8D8DF] rounded-full shadow-[0_0_20px_#A8D8DF] sm:shadow-[0_0_30px_#A8D8DF] items-center justify-center backdrop-blur-md will-change-transform ${i > 4 ? 'hidden md:flex' : 'flex'}`}
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
    // Generate a mathematically perfect, repeating EKG/ECG waveform path
    const segmentWidth = 250;
    const repeatCount = 10; // Total 2500px width
    let d = "M0 50 ";
    for(let i=0; i<repeatCount; i++) {
        const offset = i * segmentWidth;
        // Flat, P wave, flat, Q-R-S complex (deep dip, high spike, dip), flat, T wave, flat
        d += `L${offset + 60} 50 L${offset + 70} 40 L${offset + 80} 50 L${offset + 90} 50 L${offset + 100} 70 L${offset + 110} 10 L${offset + 120} 80 L${offset + 130} 50 L${offset + 160} 50 L${offset + 180} 35 L${offset + 200} 50 L${offset + 250} 50 `;
    }

    return (
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none">
            
            {/* Soft monitor grid background */}
            <div className="absolute inset-0 w-full h-[150vh] bg-[linear-gradient(rgba(29,99,117,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(29,99,117,0.15)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

            <div className="relative w-full max-w-[2500px] h-[350px] flex items-center justify-center z-10 overflow-hidden">
                {/* Center glowing horizontal basis line */}
                <div className="absolute w-full h-[1px] bg-[#1D6375]/50 shadow-[0_0_15px_#1D6375]"></div>

                {/* Traveling Heartbeat Trace */}
                <svg 
                    className="absolute inset-0 h-[150px] w-full mx-auto will-change-[stroke-dashoffset]" 
                    viewBox="0 0 2500 100" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d={d}
                        fill="none" 
                        stroke="#3AABB8" 
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_10px_#3AABB8]"
                        vectorEffect="non-scaling-stroke"
                        pathLength="100"
                        strokeDasharray="15 85"
                        style={{
                            animation: 'drawEKG 8s linear infinite'
                        }}
                    />
                </svg>
            </div>

            {/* Cinematic edge fade */}
            <div className="absolute inset-0 z-20 w-full h-full bg-gradient-to-r from-[#0B3D54]/90 via-transparent to-[#0B3D54]/90 pointer-events-none"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes drawEKG {
                    0% { stroke-dashoffset: 100; }
                    100% { stroke-dashoffset: 0; }
                }
            `}} />
        </div>
    );
}
