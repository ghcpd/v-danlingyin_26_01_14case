import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCopyToClipboard } from '../hooks';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  showLineNumbers = true,
  maxHeight = '400px',
}) => {
  const { copied, copy } = useCopyToClipboard();
  const [isHovered, setIsHovered] = useState(false);

  const lines = code.split('\n');

  const handleCopy = () => {
    copy(code);
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono uppercase">{language}</span>
        <motion.button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={copied ? 'Copied to clipboard' : 'Copy code'}
        >
          {copied ? (
            <span className="flex items-center text-green-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </span>
          ) : (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </span>
          )}
        </motion.button>
      </div>

      {/* Code Content */}
      <div className="overflow-auto" style={{ maxHeight }}>
        <pre className="p-4 text-sm">
          <code className="text-gray-300 font-mono">
            {lines.map((line, index) => (
              <div key={index} className="flex">
                {showLineNumbers && (
                  <span className="select-none text-gray-600 text-right w-8 mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                )}
                <span className="flex-1 whitespace-pre-wrap break-words">{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Hover Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent)',
        }}
      />
    </div>
  );
};

export default CodeBlock;
