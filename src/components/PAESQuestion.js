import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import KaTeXRenderer from './KaTeXRenderer';

// Función para separar texto y fórmulas en el enunciado
function renderQuestionWithMath(question) {
  const parts = question.split(/(\$[^$]+\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <KaTeXRenderer key={idx} math={part.slice(1, -1)} />;
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function PAESQuestion({ question, options, correctIndex, explanation, showResults }) {
  const [selected, setSelected] = useState(null);
  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="paes-question">
      <p><strong>{renderQuestionWithMath(question)}</strong></p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor:
                selected === idx
                  ? showResults
                    ? idx === correctIndex
                      ? '#d4edda'
                      : '#f8d7da'
                    : '#d3d3d3'
                  : '#f0f0f0',
              color: '#333',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <>
              {String.fromCharCode(65 + idx)}) <KaTeXRenderer math={opt.replace(/\$/g, '')} />
            </>
          </button>
        ))}
      </div>
      {selected !== null && showResults && (
        <p>
          {selected === correctIndex ? (
            '✅ ¡Respuesta correcta!'
          ) : (
            <>
              ❌ Respuesta incorrecta. <KaTeXRenderer math={explanation.replace(/\$/g, '')} />
            </>
          )}
        </p>
      )}
    </div>
  );
}