"use client";
import React, { useState, useEffect, useRef } from "react";

interface ShuffleTextProps {
  text: string;
}

const ShuffleTextPage: React.FC<ShuffleTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const containerRef = useRef<HTMLDivElement>(null);

  const shuffle = (o: string[]): string[] => {
    for (
      let j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const shuffleText = (originalText: string): void => {
    const elementTextArray: string[] = originalText.split("");
    let randomText: string[] = [];

    const repeatShuffle = (times: number, index: number): void => {
      if (index === times) {
        setDisplayText(originalText);
        return;
      }

      setTimeout(() => {
        randomText = shuffle([...elementTextArray]);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        setDisplayText(randomText.join(""));
        repeatShuffle(times, index + 1);
      }, 120);
    };

    repeatShuffle(originalText.length, 0);
  };

  useEffect(() => {
    shuffleText(text); // Invoke shuffleText when 'text' changes
  }, [text]); // Add 'text' as a dependency

  useEffect(() => {
    // Update container width after displayText changes
    if (containerRef.current) {
      containerRef.current.style.width = `${containerRef.current.offsetWidth}px`;
    }
  }, [displayText]); // Add 'displayText' as a dependency

  return (
    <div
      className="shuffle"
      ref={containerRef}
      style={{
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {displayText}
    </div>
  );
};

export default ShuffleTextPage;
