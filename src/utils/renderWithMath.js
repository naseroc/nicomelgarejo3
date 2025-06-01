import React from 'react';
import KaTeXRenderer from '../components/KaTeXRenderer';

// Divide el string en partes de texto y partes matemáticas ($...$)
export function renderWithMath(str) {
  if (typeof str !== 'string') return str;
  const parts = str.split(/(\$[^$]+\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <KaTeXRenderer key={idx} math={part.slice(1, -1)} />;
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}