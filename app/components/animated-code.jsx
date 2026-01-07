'use client';
import { useTypingEffect } from "@/app/hooks/use-typing-effect";

export function AnimatedCode({ code }) {
  const { displayedText, isComplete } = useTypingEffect(code, 30, 800);

  // Function to apply syntax highlighting
  const highlightSyntax = (text) => {
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Keywords
      const keywords = ['const', 'function', 'return', 'this'];
      const booleans = ['true', 'false'];
      
      let highlightedLine = line;
      let parts = [];
      let currentIndex = 0;
      
      // Simple syntax highlighting logic
      if (line.includes('const ')) {
        parts.push(
          <span key={`${lineIndex}-const`} className="text-syntax-keyword">const</span>,
          <span key={`${lineIndex}-rest`} className="text-theme-text"> {line.replace('const ', '')}</span>
        );
      } else if (line.includes('function')) {
        const functionMatch = line.match(/(.*)(function)(.*)/);
        if (functionMatch) {
          parts.push(
            <span key={`${lineIndex}-pre`} className="text-theme-text">{functionMatch[1]}</span>,
            <span key={`${lineIndex}-func`} className="text-syntax-boolean">{functionMatch[2]}</span>,
            <span key={`${lineIndex}-post`} className="theme-text-muted">{functionMatch[3]}</span>
          );
        }
      } else if (line.includes('return')) {
        const returnMatch = line.match(/(.*)(return)(.*)/);
        if (returnMatch) {
          parts.push(
            <span key={`${lineIndex}-pre`} className="theme-text-muted">{returnMatch[1]}</span>,
            <span key={`${lineIndex}-return`} className="text-syntax-keyword">{returnMatch[2]}</span>,
            <span key={`${lineIndex}-post`} className="theme-text-muted">{returnMatch[3]}</span>
          );
        }
      } else if (line.includes('this.')) {
        const thisMatch = line.match(/(.*)(this\.)([a-zA-Z]+)(.*)/);
        if (thisMatch) {
          parts.push(
            <span key={`${lineIndex}-pre`} className="theme-text-muted">{thisMatch[1]}</span>,
            <span key={`${lineIndex}-this`} className="text-syntax-property">{thisMatch[2]}</span>,
            <span key={`${lineIndex}-prop`} className="text-theme-text">{thisMatch[3]}</span>,
            <span key={`${lineIndex}-post`} className="text-syntax-keyword">{thisMatch[4]}</span>
          );
        }
      } else if (line.includes("'")) {
        // String highlighting
        const stringMatch = line.match(/(.*)'([^']*)'(.*)/);
        if (stringMatch) {
          parts.push(
            <span key={`${lineIndex}-pre`} className="text-theme-text">{stringMatch[1]}</span>,
            <span key={`${lineIndex}-quote1`} className="theme-text-muted">'</span>,
            <span key={`${lineIndex}-str`} className="text-syntax-string">{stringMatch[2]}</span>,
            <span key={`${lineIndex}-quote2`} className="theme-text-muted">'</span>,
            <span key={`${lineIndex}-post`} className="theme-text-muted">{stringMatch[3]}</span>
          );
        }
      } else if (line.includes('true') || line.includes('false')) {
        const boolMatch = line.match(/(.*)(true|false)(.*)/);
        if (boolMatch) {
          parts.push(
            <span key={`${lineIndex}-pre`} className="text-theme-text">{boolMatch[1]}</span>,
            <span key={`${lineIndex}-bool`} className="text-syntax-boolean">{boolMatch[2]}</span>,
            <span key={`${lineIndex}-post`} className="theme-text-muted">{boolMatch[3]}</span>
          );
        }
      } else {
        // Default styling
        parts.push(<span key={lineIndex} className="theme-text-muted">{line}</span>);
      }
      
      return (
        <div key={lineIndex}>
          {parts.length > 0 ? parts : <span className="theme-text-muted">{line}</span>}
        </div>
      );
    });
  };

  return (
    <code className="font-mono text-xs md:text-sm lg:text-base relative">
      <pre className="whitespace-pre-wrap">
        {highlightSyntax(displayedText)}
      </pre>
      {!isComplete && (
        <span className="inline-block w-[2px] h-4 bg-cyan-500 ml-1 animate-blink" />
      )}
    </code>
  );
}
