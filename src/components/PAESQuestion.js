import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { renderWithMath } from '../utils/renderWithMath';

export default function PAESQuestion({ question, options, correctIndex, explanation, showResults }) {
  const [selected, setSelected] = useState(null);
  const handleSelect = (index) => setSelected(index);

  return (
    <div className="paes-question">
      <p><strong>{renderWithMath(question)}</strong></p>
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
              {String.fromCharCode(65 + idx)}) {renderWithMath(opt)}
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
              ❌ Respuesta incorrecta. {renderWithMath(explanation)}
            </>
          )}
        </p>
      )}
    </div>
  );
}