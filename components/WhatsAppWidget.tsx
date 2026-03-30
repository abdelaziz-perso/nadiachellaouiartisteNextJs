"use client";

import { useState } from "react";

type WhatsAppWidgetProps = {
  label: string;
  helloMessage: string;
  placeholder: string;
  closeLabel: string;
  sendLabel: string;
  phoneNumber: string;
  isRtl: boolean;
};

export default function WhatsAppWidget({
  label,
  helloMessage,
  placeholder,
  closeLabel,
  sendLabel,
  phoneNumber,
  isRtl
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(helloMessage);

  function openWhatsApp() {
    const finalMessage = message.trim() || helloMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="fixed bottom-[calc(3.75rem+env(safe-area-inset-bottom))] right-0 z-40 w-[92vw] max-w-sm rounded-tl-2xl border border-black/10 bg-white p-4 shadow-xl sm:w-[88vw]"
        >
          <p className="mb-3 text-sm font-medium text-ink">{helloMessage}</p>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-24 w-full rounded-xl border border-black/15 px-3 py-2 text-sm outline-none focus:border-ink/40"
            placeholder={placeholder}
          />
          <div className="mt-3 flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              {closeLabel}
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="rounded-full bg-[#25D366] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
            >
              {sendLabel}
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-[env(safe-area-inset-bottom)] right-0 z-30 flex h-14 w-14 items-center justify-center rounded-tl-2xl bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105"
        aria-label={label}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.22c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.17.26-.69.86-.84 1.03-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.48-1.82-.15-.26-.02-.4.11-.53.12-.12.27-.31.4-.46.13-.15.18-.26.27-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.53-.45-.46-.6-.46h-.52c-.17 0-.45.07-.69.33-.24.27-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.18 1.83 2.79 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.08 1.58-.65 1.8-1.28.22-.62.22-1.16.15-1.27-.06-.11-.24-.18-.51-.31zM16.02 28h-.01a12 12 0 0 1-6.12-1.67L4 27.86l1.57-5.74A11.96 11.96 0 0 1 4 16c0-6.63 5.39-12 12.02-12A12 12 0 0 1 28 16c0 6.63-5.39 12-11.98 12zm0-22.03A10.03 10.03 0 0 0 6 16c0 1.74.45 3.44 1.31 4.95l.21.36-.93 3.38 3.47-.91.35.21a10.03 10.03 0 0 0 5.6 1.7H16A10.02 10.02 0 0 0 26.03 16 10.03 10.03 0 0 0 16.02 5.97z" />
        </svg>
        <span className="sr-only">{label}</span>
      </button>
    </>
  );
}
