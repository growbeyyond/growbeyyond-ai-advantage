import { useState } from 'react';

export const useAuditPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAuditPopup = () => {
    setIsOpen(true);
  };

  const closeAuditPopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openAuditPopup,
    closeAuditPopup,
  };
};