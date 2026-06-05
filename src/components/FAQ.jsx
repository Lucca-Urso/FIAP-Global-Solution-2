import { useState } from 'react';

const FAQ = ({ question, answer, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-4 -mx-4"
        aria-expanded={isExpanded}>
        <span className="font-semibold text-primary pr-8">{question}</span>
        <svg className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="pb-4 px-4 -mx-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;