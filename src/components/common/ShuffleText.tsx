"use client";

import React, { useState } from "react";

interface ShuffleTextProps {
  text: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>(text);

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
      }, 100);
    };
    repeatShuffle(originalText.length, 0);
  };

  const handleMouseEnter = (): void => {
    shuffleText(text);
  };

  return (
    <a href="#" className="shuffle" onMouseEnter={handleMouseEnter}>
      {displayText}
    </a>
  );
};

export default ShuffleText;
