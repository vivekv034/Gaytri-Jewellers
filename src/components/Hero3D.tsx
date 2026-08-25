import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RefreshCw } from 'lucide-react';

interface Hero3DProps {
  onExploreClick?: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Clean any prior children
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainKeyLight.position.set(5, 5, 4);
    scene.add(mainKeyLight);

    const goldFillLight = new THREE.DirectionalLight(0xf5d38c, 2.0);
    goldFillLight.position.set(-5, -3, 3);
    scene.add(goldFillLight);

    const silverRimLight = new THREE.PointLight(0xdfe8ff, 3.5, 20);
    silverRimLight.position.set(0, 4, -3);
    scene.add(silverRimLight);

    const bottomGlow = new THREE.PointLight(0xd4af37, 1.8, 15);
    bottomGlow.position.set(0, -4, 2);
    scene.add(bottomGlow);

    // 4. Procedural Luxury Silver Rakhi Group
    const rakhiGroup = new THREE.Group();
    scene.add(rakhiGroup);

    // Materials
    const silverMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.15,
    });

    const brushedSilver = new THREE.MeshStandardMaterial({
      color: 0xd8dbe2,
      metalness: 0.9,
      roughness: 0.28,
    });

    const goldAccent = new THREE.MeshStandardMaterial({
      color: 0xdeb841,
      metalness: 0.9,
      roughness: 0.2,
    });

    const rubyGemMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9b111e,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.6,
      ior: 1.76,
    });

    const threadMaterial = new THREE.MeshStandardMaterial({
      color: 0xb91c1c, // auspicious deep red
      roughness: 0.7,
      metalness: 0.1,
    });

    const goldThreadMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.4,
      metalness: 0.8,
    });

    // Central Silver Mandala
    // Outer decorative notched ring
    const outerRingGeo = new THREE.TorusGeometry(1.6, 0.08, 24, 64);
    const outerRing = new THREE.Mesh(outerRingGeo, silverMaterial);
    rakhiGroup.add(outerRing);

    // Filigree Beaded Ring (Concentric pearl beads around outer rim)
    const beadCount = 28;
    const beadRadius = 1.6;
    for (let i = 0; i < beadCount; i++) {
      const angle = (i / beadCount) * Math.PI * 2;
      const beadGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const beadMesh = new THREE.Mesh(beadGeo, i % 2 === 0 ? silverMaterial : goldAccent);
      beadMesh.position.set(Math.cos(angle) * beadRadius, Math.sin(angle) * beadRadius, 0.04);
      rakhiGroup.add(beadMesh);
    }

    // Mid-tier Petal Sunburst / Lotus Filigree
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const petalGeo = new THREE.ConeGeometry(0.24, 0.7, 5);
      const petalMesh = new THREE.Mesh(petalGeo, brushedSilver);
      petalMesh.rotation.z = angle - Math.PI / 2;
      petalMesh.position.set(Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0);
      rakhiGroup.add(petalMesh);

      // Mini golden tips
      const tipGeo = new THREE.SphereGeometry(0.04, 12, 12);
      const tipMesh = new THREE.Mesh(tipGeo, goldAccent);
      tipMesh.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0.02);
      rakhiGroup.add(tipMesh);
    }

    // Inner Silver Medallion Base
    const innerDiscGeo = new THREE.CylinderGeometry(0.85, 0.9, 0.12, 48);
    const innerDisc = new THREE.Mesh(innerDiscGeo, silverMaterial);
    innerDisc.rotation.x = Math.PI / 2;
    rakhiGroup.add(innerDisc);

    // Sacred Om / Center Medallion Boss (Stepped Diamond-cut Boss)
    const centerTorusGeo = new THREE.TorusGeometry(0.55, 0.07, 16, 32);
    const centerTorus = new THREE.Mesh(centerTorusGeo, goldAccent);
    centerTorus.position.z = 0.08;
    rakhiGroup.add(centerTorus);

    // Center faceted Ruby/Garnet stone
    const gemGeo = new THREE.OctahedronGeometry(0.35, 2);
    const gem = new THREE.Mesh(gemGeo, rubyGemMaterial);
    gem.position.z = 0.12;
    rakhiGroup.add(gem);

    // Side Auspicious Braided Cords & Hanging Silver/Rudraksha Beads
    const cordSegments = 24;
    const createSideCord = (direction: number) => {
      const cordGroup = new THREE.Group();

      // Curved thread path
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= cordSegments; j++) {
        const t = j / cordSegments;
        const x = direction * (1.6 + t * 2.2);
        const y = Math.sin(t * Math.PI) * -0.3 + Math.sin(t * 4) * 0.08;
        const z = Math.cos(t * 3) * 0.15;
        points.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.04, 8, false);
      const cordMesh = new THREE.Mesh(tubeGeo, threadMaterial);
      cordGroup.add(cordMesh);

      // Gold secondary twisted strand
      const goldPoints = points.map((p, idx) => new THREE.Vector3(p.x, p.y + 0.04 * Math.sin(idx), p.z + 0.03));
      const goldCurve = new THREE.CatmullRomCurve3(goldPoints);
      const goldTubeGeo = new THREE.TubeGeometry(goldCurve, 28, 0.025, 6, false);
      const goldCordMesh = new THREE.Mesh(goldTubeGeo, goldThreadMaterial);
      cordGroup.add(goldCordMesh);

      // Spacer Beads along cord
      const beadDistances = [0.25, 0.55, 0.85];
      beadDistances.forEach((bd, idx) => {
        const point = curve.getPoint(bd);
        const beadGeo = new THREE.SphereGeometry(0.12, 16, 16);
        const bead = new THREE.Mesh(beadGeo, idx === 1 ? goldAccent : silverMaterial);
        bead.position.copy(point);
        cordGroup.add(bead);
      });

      return cordGroup;
    };

    const leftCord = createSideCord(-1);
    const rightCord = createSideCord(1);
    rakhiGroup.add(leftCord);
    rakhiGroup.add(rightCord);

    // 5. Floating Sparkle Particles (Gold & Silver Star Dust)
    const particleCount = window.innerWidth < 768 ? 45 : 90;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 9;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const ctx = particleCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 235, 180, 1)');
      grad.addColorStop(0.4, 'rgba(255, 215, 0, 0.7)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Interactive Mouse & Animation State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Floating oscillation & slow regal rotation
      const floatingY = Math.sin(elapsedTime * 1.4) * 0.15;
      const floatingZ = Math.cos(elapsedTime * 1.1) * 0.08;

      rakhiGroup.position.y = floatingY;
      rakhiGroup.position.z = floatingZ;

      if (isRotating) {
        rakhiGroup.rotation.y = elapsedTime * 0.35 + targetX * 0.6;
        rakhiGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1 - targetY * 0.5;
        rakhiGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.05 + targetX * 0.2;
      } else {
        rakhiGroup.rotation.y = targetX * 0.8;
        rakhiGroup.rotation.x = -targetY * 0.6;
      }

      // Sparkle particles gentle rotation
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = elapsedTime * 0.03;

      // Gem internal pulse
      gem.rotation.z = elapsedTime * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [isRotating]);

  return (
    <div
      id="hero-jewellery-canvas-container"
      className="relative w-full h-[450px] sm:h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasWebGL ? (
        <>
          {/* ThreeJS Container */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Interactive controls indicator */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-[#1a0202]/90 backdrop-blur-md px-3 py-1.5 border border-[#d4af37]/30 text-[10px] uppercase tracking-wider text-[#f5f2ed]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span className="hidden sm:inline">3D Interactive Silver Rakhi</span>
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="ml-1 p-1 hover:text-[#d4af37] transition-colors cursor-pointer"
              title={isRotating ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
            >
              <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
            </button>
          </div>
        </>
      ) : (
        /* Graceful Fallback if WebGL is unsupported */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#2a0303]">
          <div className="w-64 h-64 sm:w-80 sm:h-80 border border-[#d4af37]/40 p-4 shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-[#1a0202] relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1611591477435-bc3277341ea2?auto=format&fit=crop&w=600&q=80"
              alt="Pure Silver Rakhi - Gaytri Jewellers"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-[#d4af37] font-serif">
            Handcrafted Pure Silver Rakhi · Rasra Showroom
          </p>
        </div>
      )}
    </div>
  );
};
