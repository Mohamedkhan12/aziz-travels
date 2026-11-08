
const WhatsAppButton = () => {
  const phoneNumber = "94758519429";

  const message = encodeURIComponent(
    "Hello Aziz Travelland Tours! I would like to know more about your Sri Lanka travel services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Aziz Travelland Tours on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16.04 2.67C8.7 2.67 2.73 8.63 2.73 15.97c0 2.34.61 4.63 1.77 6.64L2.67 29.33l6.88-1.8a13.3 13.3 0 0 0 6.49 1.67h.01c7.33 0 13.3-5.97 13.3-13.3 0-3.56-1.39-6.9-3.91-9.42a13.22 13.22 0 0 0-9.4-3.81Zm0 24.3h-.01a11.1 11.1 0 0 1-5.65-1.55l-.4-.24-4.08 1.07 1.09-3.98-.26-.41a11.06 11.06 0 0 1-1.7-5.89c0-6.1 4.96-11.06 11.07-11.06 2.96 0 5.74 1.15 7.83 3.24a11 11 0 0 1 3.24 7.82c0 6.1-4.96 11-11.13 11Zm6.07-8.28c-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.8-1.01-2.47-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.16 1.34 3.38.17.22 2.32 3.54 5.62 4.97.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.96-.8 2.23-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
