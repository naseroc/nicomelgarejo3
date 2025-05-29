import React, { useEffect, useRef } from 'react';
import katex from 'katex';

export default function KaTeXRenderer({ math, block = false }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      katex.render(math, ref.current, {
        throwOnError: false,
        displayMode: block,
      });
    }
  }, [math, block]);

  return <span ref={ref} />;
}