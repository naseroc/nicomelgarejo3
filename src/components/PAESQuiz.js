import React, { useState } from 'react';
import PAESQuestion from './PAESQuestion';

export default function PAESQuiz({ title, description, theme, duration, questions }) {
  const [showResults, setShowResults] = useState(false);
    const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="paes-quiz">
      <h2>{title}</h2>
      <p><strong>Duración:</strong> {duration} minutos</p>
      <p><strong>Temática:</strong> {theme}</p>
      <p>{description}</p>
      <hr />
      {questions.map((q, index) => (
        <div key={index} className="paes-question-box">
          <h3>Pregunta {index + 1}</h3>
          <PAESQuestion
            question={q.question}
            options={q.options}
            correctIndex={q.correctIndex}
            explanation={q.explanation}
            showResults={showResults}
          />
        </div>
      ))}
      {!showResults && (
        <button onClick={handleSubmit} className="button button--primary button--lg">
          Enviar respuestas
        </button>
      )}
    </div>
  );
}