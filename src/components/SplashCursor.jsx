'use client';
import { useEffect, useRef } from 'react';

function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true
}) {
  const canvasRef = useRef(null);

  // Ajuste automático para mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  const simRes = isMobile ? 64 : SIM_RESOLUTION;
  const dyeRes = isMobile ? 480 : DYE_RESOLUTION;
  const capRes = isMobile ? 256 : CAPTURE_RESOLUTION;
  const splatRadius = isMobile ? 0.12 : SPLAT_RADIUS;
  const splatForce = isMobile ? 3000 : SPLAT_FORCE;

  useEffect(() => {
    // ... código original, mas usando simRes, dyeRes, capRes, splatRadius, splatForce ...
  }, [
    simRes,
    dyeRes,
    capRes,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    splatRadius,
    splatForce,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR,
    TRANSPARENT,
  ]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        id="fluid"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
        }}
      />
    </div>
  );
}

export default SplashCursor; 