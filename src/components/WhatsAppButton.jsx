
const WhatsAppButton = () => {
  const phoneNumber = "94722664945";

  const message = encodeURIComponent(
    "Hello Aziz Travels! I would like to know more about your Sri Lanka tour packages."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Aziz Travels on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91a11.84 11.84 0 00-3.43-8.42zM12.04 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.87 9.87 0 01-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.87 9.87 0 017.02 2.91 9.87 9.87 0 012.9 7.01c0 5.47-4.45 9.89-9.93 9.89zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
