"use client";

import { useContactModal } from "./ContactModalProvider";

export default function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openModal } = useContactModal();
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
