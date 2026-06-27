import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface ThreeBackgroundProps {
  className?: string;
  variant?: 'home' | 'services' | 'about' | 'work' | 'contact';
}

export function ThreeBackground({ className, variant = 'home' }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Common Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0077ff, 3, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0x9d00ff, 3, 20);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);
    
    const cyanLight = new THREE.PointLight(0x00ffcc, 2, 20);
    cyanLight.position.set(0, 5, -5);
    scene.add(cyanLight);

    // Group to hold all objects for rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    
    // Arrays to hold animated objects
    const floaters: { mesh: THREE.Object3D, speed: number, offset: number, axis: 'x' | 'y' | 'z' }[] = [];
    const rotators: { mesh: THREE.Object3D, speedX: number, speedY: number, speedZ: number }[] = [];
    let customAnimation: ((time: number) => void) | null = null;

    if (variant === 'home') {
      // 1. Screens
      function createScreen(color: number, width: number, height: number) {
        const geometry = new THREE.BoxGeometry(width, height, 0.05);
        const material = new THREE.MeshPhysicalMaterial({ 
            color: 0x050505, 
            transparent: true, 
            opacity: 0.8,
            metalness: 0.8,
            roughness: 0.2,
            clearcoat: 1.0,
        });
        const screen = new THREE.Mesh(geometry, material);
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.7 });
        const wireframe = new THREE.LineSegments(edges, lineMat);
        screen.add(wireframe);
        return screen;
      }

      const screen1 = createScreen(0x0077ff, 2, 1.2);
      screen1.position.set(0, 0.5, 0.5);
      mainGroup.add(screen1);
      floaters.push({ mesh: screen1, speed: 0.001, offset: 0, axis: 'y' });

      const screen2 = createScreen(0x00ffcc, 1.5, 2);
      screen2.position.set(-2.5, -0.5, -1);
      screen2.rotation.y = Math.PI / 4;
      mainGroup.add(screen2);
      floaters.push({ mesh: screen2, speed: 0.0015, offset: Math.PI / 2, axis: 'y' });

      const screen3 = createScreen(0x9d00ff, 2.2, 1);
      screen3.position.set(2.5, -1, -1.5);
      screen3.rotation.y = -Math.PI / 5;
      mainGroup.add(screen3);
      floaters.push({ mesh: screen3, speed: 0.0012, offset: Math.PI, axis: 'y' });
      
      // 2. Abstract Geometry (Rings & Core)
      const coreGeometry = new THREE.IcosahedronGeometry(0.5, 0);
      const coreMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffffff, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.position.set(2, 2, -2);
      mainGroup.add(core);
      rotators.push({ mesh: core, speedX: 0.01, speedY: 0.02, speedZ: 0.01 });

      const torusGeometry = new THREE.TorusGeometry(0.8, 0.02, 16, 100);
      const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff, transparent: true, opacity: 0.5 });
      const torus1 = new THREE.Mesh(torusGeometry, torusMaterial);
      core.add(torus1);
      rotators.push({ mesh: torus1, speedX: 0.03, speedY: 0.0, speedZ: 0.01 });

      const torus2 = new THREE.Mesh(torusGeometry, torusMaterial);
      torus2.rotation.x = Math.PI / 2;
      core.add(torus2);
      rotators.push({ mesh: torus2, speedX: 0.0, speedY: 0.03, speedZ: 0.02 });
      
      // 3. Network Nodes
      const nodesGroup = new THREE.Group();
      mainGroup.add(nodesGroup);
      nodesGroup.position.set(-2, 2, -2);
      rotators.push({ mesh: nodesGroup, speedX: 0.005, speedY: 0.01, speedZ: 0.005 });

      const nodeCount = 10;
      const nodeGeom = new THREE.SphereGeometry(0.05, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
      
      const nodePositions: THREE.Vector3[] = [];
      for(let i=0; i<nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeom, nodeMat);
        const pos = new THREE.Vector3(
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3
        );
        node.position.copy(pos);
        nodePositions.push(pos);
        nodesGroup.add(node);
      }
      
      const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.2 });
      for(let i=0; i<nodeCount; i++) {
        for(let j=i+1; j<nodeCount; j++) {
          if(nodePositions[i].distanceTo(nodePositions[j]) < 2) {
            const points = [nodePositions[i], nodePositions[j]];
            const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeom, lineMat);
            nodesGroup.add(line);
          }
        }
      }
    } else if (variant === 'services') {
      // Services: Interconnected geometric shapes (representing different services)
      const shapesGroup = new THREE.Group();
      mainGroup.add(shapesGroup);

      const materials = [
        new THREE.MeshPhongMaterial({ color: 0x0077ff, wireframe: true, transparent: true, opacity: 0.6 }),
        new THREE.MeshPhongMaterial({ color: 0x00ffcc, wireframe: true, transparent: true, opacity: 0.6 }),
        new THREE.MeshPhongMaterial({ color: 0x9d00ff, wireframe: true, transparent: true, opacity: 0.6 }),
      ];

      const geometries = [
        new THREE.OctahedronGeometry(1, 0),
        new THREE.DodecahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(1, 0)
      ];

      for (let i = 0; i < 3; i++) {
        const mesh = new THREE.Mesh(geometries[i], materials[i]);
        const angle = (i / 3) * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * 2, Math.sin(angle) * 2, 0);
        shapesGroup.add(mesh);
        rotators.push({ mesh, speedX: 0.01 + i * 0.005, speedY: 0.02, speedZ: 0.01 });
        floaters.push({ mesh, speed: 0.002, offset: i, axis: 'z' });

        // Inner solid core
        const coreMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 16, 16),
          new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.8, roughness: 0.2 })
        );
        mesh.add(coreMesh);
      }
      rotators.push({ mesh: shapesGroup, speedX: 0.002, speedY: 0.005, speedZ: 0.003 });

    } else if (variant === 'about') {
      // About Us: Realistic glowing metallic torus knot with floating data particles
      const coreGroup = new THREE.Group();
      mainGroup.add(coreGroup);
      
      const metalMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x00aaff,
        metalness: 1.0,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        emissive: 0x002266,
        emissiveIntensity: 0.8,
      });

      const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 256, 64);
      const torusKnot = new THREE.Mesh(geometry, metalMaterial);
      coreGroup.add(torusKnot);
      rotators.push({ mesh: torusKnot, speedX: 0.002, speedY: 0.005, speedZ: 0.001 });

      // Inner glowing core
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const glowSphere = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), glowMaterial);
      coreGroup.add(glowSphere);
      
      // Floating data rings
      for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(3 + i * 0.8, 0.01, 16, 100),
          new THREE.MeshBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.4 })
        );
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        coreGroup.add(ring);
        rotators.push({ mesh: ring, speedX: Math.random() * 0.005 - 0.0025, speedY: Math.random() * 0.005 - 0.0025, speedZ: 0 });
      }

    } else if (variant === 'work') {
      // Our Work: Floating digital canvases/panels arranged in a cylinder
      const galleryGroup = new THREE.Group();
      mainGroup.add(galleryGroup);
      
      const panelCount = 8;
      const radius = 3;
      for (let i = 0; i < panelCount; i++) {
        const angle = (i / panelCount) * Math.PI * 2;
        const panelGroup = new THREE.Group();
        
        const panel = new THREE.Mesh(
          new THREE.PlaneGeometry(1.5, 2),
          new THREE.MeshPhysicalMaterial({ color: 0x111111, transparent: true, opacity: 0.7, metalness: 0.8, roughness: 0.2, side: THREE.DoubleSide })
        );
        
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.PlaneGeometry(1.5, 2)),
          new THREE.LineBasicMaterial({ color: i % 2 === 0 ? 0x0077ff : 0x00ffcc, transparent: true, opacity: 0.5 })
        );
        panelGroup.add(panel);
        panelGroup.add(edges);

        panelGroup.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 2, Math.sin(angle) * radius);
        panelGroup.rotation.y = -angle + Math.PI / 2;
        
        galleryGroup.add(panelGroup);
        floaters.push({ mesh: panelGroup, speed: 0.001 + Math.random() * 0.001, offset: i, axis: 'y' });
      }
      
      rotators.push({ mesh: galleryGroup, speedX: 0, speedY: 0.005, speedZ: 0 });

    } else if (variant === 'contact') {
      // Contact Us: A simple, highly realistic, calm glassy orb
      const orbGroup = new THREE.Group();
      mainGroup.add(orbGroup);
      
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.95,
        opacity: 1,
        metalness: 0.2,
        roughness: 0.1,
        ior: 1.52,
        thickness: 2.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });

      const geometry = new THREE.SphereGeometry(1.5, 64, 64);
      const orb = new THREE.Mesh(geometry, glassMaterial);
      orbGroup.add(orb);
      
      // Add a subtle inner glow
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x0077ff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      });
      const glowOrb = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glowMaterial);
      orbGroup.add(glowOrb);

      rotators.push({ mesh: orbGroup, speedX: 0.001, speedY: 0.002, speedZ: 0.001 });
      floaters.push({ mesh: orbGroup, speed: 0.001, offset: 0, axis: 'y' });
    }

    // Floating particles for "data flow" (Common to all)
    const particleCount = variant === 'contact' ? 50 : 150;
    const particlesGeom = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particlesMesh);

    camera.position.z = 6;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const time = Date.now();

      // Mouse tracking rotation
      mainGroup.rotation.y += (mouseX * 0.5 - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (mouseY * 0.5 - mainGroup.rotation.x) * 0.05;
      
      // Animate rotators
      rotators.forEach(rot => {
        rot.mesh.rotation.x += rot.speedX;
        rot.mesh.rotation.y += rot.speedY;
        rot.mesh.rotation.z += rot.speedZ;
      });

      // Animate floaters
      floaters.forEach(fl => {
        fl.mesh.position[fl.axis] += Math.sin(time * fl.speed + fl.offset) * 0.002;
      });
      
      if (customAnimation) {
        customAnimation(time);
      }
      
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      // Proper cleanup of Three.js resources
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeom.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={cn("w-full h-full", className)}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
