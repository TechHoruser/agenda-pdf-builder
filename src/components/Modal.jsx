export const Modal = ({
  children,
  onClose,
}) => <div
  className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
>
    <div
      className="bg-white p-8 rounded relative"
    >
      <button
        onClick={onClose}
        className="
          bg-gray-500
          h-6
          w-6
          rounded
          text-white
          flex
          items-center
          justify-center
          hover:bg-gray-600
          absolute top-2 right-2
        "
      >
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {children}
    </div>
  </div>
