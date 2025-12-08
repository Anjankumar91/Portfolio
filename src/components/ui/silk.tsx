/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend three.js classes for react-three-fiber
extend({ ShaderMaterial: THREE.ShaderMaterial });

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;

vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2 rot = mat2(c, -s, s, c);
    return rot * uv;
}

void main() {
    vec2 uv = rotateUvs(vUv * uScale, uRotation);
    float tOffset = uSpeed * uTime;

    uv.y += 0.03 * sin(8.0 * uv.x - tOffset);

    // Pattern modulates brightness slightly, but never negative
    float pattern = 0.8 + 0.2 * sin(5.0 * (uv.x + uv.y + 0.02 * tOffset));

    vec3 col = uColor * pattern;
    col = clamp(col, 0.0, 1.0); // ensures color stays visible
    gl_FragColor = vec4(col, 1.0);
}
`;

interface SilkPlaneProps {
  speed: number;
  scale: number;
  color: string;
  noiseIntensity: number;
  rotation: number;
}

const SilkPlane: React.FC<SilkPlaneProps> = ({ speed, scale, color, noiseIntensity, rotation }) => {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new THREE.Color(color) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  useLayoutEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [viewport]);

  useFrame((_state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[{
          uniforms,
          vertexShader,
          fragmentShader,
        }]}
      />
    </mesh>
  );
};

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({ 
  speed = 5, 
  scale = 1, 
  color = '#3498DB', 
  noiseIntensity = 1.5, 
  rotation = 0 
}) => {
  return (
    <Canvas dpr={[1, 2]} frameloop="always">
      <SilkPlane 
        speed={speed}
        scale={scale}
        color={color}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
      />
    </Canvas>
  );
};

export default Silk;
