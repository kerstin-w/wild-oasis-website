'use client';
import { useState } from 'react';

/**
 * The TextExpander function in JavaScript truncates text to a specified length and provides a "Show more" button to expand the text.
 * @returns The TextExpander component is being returned. It displays the text content passed as children, either in full or truncated with an option to expand and collapse the text.
 */
function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
