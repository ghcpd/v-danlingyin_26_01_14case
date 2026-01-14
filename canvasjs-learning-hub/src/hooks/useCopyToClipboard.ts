import { useState, useCallback } from 'react';
import { copyToClipboard } from '../utils/helpers';

interface UseCopyToClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
  reset: () => void;
}

export const useCopyToClipboard = (resetDelay = 2000): UseCopyToClipboardReturn => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      const success = await copyToClipboard(text);
      setCopied(success);

      if (success) {
        setTimeout(() => {
          setCopied(false);
        }, resetDelay);
      }
    },
    [resetDelay]
  );

  const reset = useCallback(() => {
    setCopied(false);
  }, []);

  return { copied, copy, reset };
};
