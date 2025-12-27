const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded relative">
      <button onClick={onClose} className="absolute top-2 right-2">×</button>
      {children}
    </div>
  </div>
);

export default Modal;
