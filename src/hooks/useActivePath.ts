import { useLocation } from 'react-router-dom';

export const useActivePath = (): string => {
  const location = useLocation();
  return location.pathname;
};
