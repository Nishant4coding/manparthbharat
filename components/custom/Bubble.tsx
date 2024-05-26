import React, { memo, useEffect, useMemo } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import clsx from "clsx";
import RenderCompleted from "@/hooks/RenderCompleted";

function BubbleUnderlay({
  className,
}: {
  className?: string;
}): React.ReactElement {
  const numBubbles = useMemo(
    () =>
      typeof window !== "undefined"
        ? Math.floor(Math.random() * 10) + Math.floor(window.innerHeight / 100)
        : 0,
    []
  );

  const isRendered = RenderCompleted();

  const bubbleColors = ["bg-[#FF9900]", "bg-yellow-600", "bg-amber-300", "bg-orange-400"];
  let bubbleSizes = [64, 96, 72, 80];

  if (!isRendered) return <></>;

  // Adjust bubble sizes for mobile view
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    bubbleSizes = [32, 48, 36, 40];
  }

  return (
    <div className={className}>
      <AnimatePresence initial={true}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
          className="relative w-full h-full"
        >
          {Array(numBubbles)
            .fill(0)
            .map((_, index) => {
              const color =
                bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
              const size =
                bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];
              return (
                <Bubble key={index} index={index} color={color} size={size} />
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(BubbleUnderlay);

const Bubble = memo(
  function BubbleComponent({ index, color, size }: { index: number; color: string; size: number }) {
    let newValInterval = 20000; // 20s
    const positionX = useMotionValue((Math.random() * 1.5 - 0.5) * window.innerWidth);
    const positionY = useMotionValue((Math.random() * 1.5 - 0.5) * window.innerHeight);

    const updatePosition = () => {
      positionX.set((Math.random() * 1.5 - 0.5) * window.innerWidth);
      positionY.set((Math.random() * 1.5 - 0.5) * window.innerHeight);
    };

    useEffect(() => {
      updatePosition();
      const intervalIns = setInterval(updatePosition, newValInterval);
      return () => {
        clearInterval(intervalIns);
      };
    });

    return (
      <motion.div
        initial={{
          scale: 1.2,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 3,
          delay: 0.2,
        }}
      >
        <motion.div
          key={index}
          className={clsx(
            "absolute",
            "bg-opacity-10 rounded-full blur-2xl",
            color,
            "-translate-x-1/2 -translate-y-1/2",
            "ease-linear infinite"
          )}
          style={{
            width: `${size / 4}rem`,
            height: `${size / 4}rem`,
            x: useMotionTemplate`${positionX}px`,
            y: useMotionTemplate`${positionY}px`,
            translateX: "-50%",
            translateY: "-50%",
            transition: `all ${newValInterval / 1000}s `,
          }}
        />
      </motion.div>
    );
  }
);
Bubble.displayName = "Bubble";
