"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo({words}:{
    words: {
        text: string;
        className?: string;
      }[];
}) {
  
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
