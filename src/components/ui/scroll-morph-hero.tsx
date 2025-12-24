import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, target }: FlipCardProps) {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg border border-border/30"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full rounded-lg bg-primary flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center text-primary-foreground">
            <p className="text-[8px] font-bold">View</p>
            <p className="text-[6px]">Details</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

// Marketing/Portfolio themed images
const IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80", // Analytics dashboard
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80", // Data visualization
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&q=80", // Marketing graphs
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80", // Team meeting
  "https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&q=80", // Strategy planning
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&q=80", // Digital marketing
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&q=80", // Social media
  "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70c?w=300&q=80", // Creative workspace
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80", // Business presentation
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Team collaboration
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=300&q=80", // Marketing campaign
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=300&q=80", // Tech innovation
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80", // Team success
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80", // Collaboration
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80", // Growth charts
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80", // Business analytics
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=80", // Office meeting
  "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=300&q=80", // Mobile marketing
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&q=80", // Team brainstorm
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80", // Tech team
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

interface ScrollMorphHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function ScrollMorphHero({ 
  title = "Our Projects",
  subtitle = "SCROLL TO EXPLORE",
  description = "Discover our portfolio of successful AI-powered marketing campaigns that have transformed businesses."
}: ScrollMorphHeroProps) {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ touchAction: "none" }}
      >
        {/* Intro Text */}
        <motion.div
          className="absolute z-20 text-center pointer-events-none"
          animate={{
            opacity: introPhase === "circle" ? (morphValue > 0.3 ? 0 : 1) : 1,
            scale: introPhase === "circle" ? (morphValue > 0.3 ? 0.8 : 1) : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Arc Active Content */}
        <motion.div
          className="absolute z-20 top-16 left-0 right-0 text-center pointer-events-none px-4"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-4">
            Explore Our Vision
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            {description}
          </p>
        </motion.div>

        {/* Cards Container */}
        <div
          className="absolute"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);

              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
