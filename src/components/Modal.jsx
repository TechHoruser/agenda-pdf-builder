export const Modal = ({
  children,
  onClose,
}) => <div
  className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
>
    <div
      className="bg-white p-4 rounded"
    >
      <button
        onClick={onClose}
        className="bg-red-500 p-2 rounded"
      >
        Close
      </button>
      {children}
    </div>
  </div>
