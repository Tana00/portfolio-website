import React, { useRef, useEffect } from "react";

const STAR_COUNT = 60;
const STAR_COLOR = "rgba(91, 163, 247, 0.7)";
const STAR_SIZE = [0.7, 1.5];
const STAR_SPEED = [0.05, 0.2];

type Star = {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(STAR_SIZE[0], STAR_SIZE[1]),
      speed: randomBetween(STAR_SPEED[0], STAR_SPEED[1]),
      opacity: randomBetween(0.5, 1),
      twinkleSpeed: randomBetween(0.005, 0.015),
      twinklePhase: randomBetween(0, Math.PI * 2),
    }));

    let frame = 0;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      frame++;
      for (const star of stars.current) {
        // Twinkle: animate opacity with a sine wave
        const twinkle =
          Math.sin(frame * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = STAR_COLOR;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1;
        // Move star
        star.y += star.speed;
        if (star.y > height) {
          star.x = randomBetween(0, width);
          star.y = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Re-generate stars for new size
      stars.current = Array.from({ length: STAR_COUNT }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        r: randomBetween(STAR_SIZE[0], STAR_SIZE[1]),
        speed: randomBetween(STAR_SPEED[0], STAR_SPEED[1]),
        opacity: randomBetween(0.5, 1),
        twinkleSpeed: randomBetween(0.005, 0.015),
        twinklePhase: randomBetween(0, Math.PI * 2),
      }));
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default Starfield;
