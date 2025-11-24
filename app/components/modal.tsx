import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

interface IModal {
  open: boolean;
  children: React.ReactNode;
  ref?: any;
}

const Modal: React.FC<IModal> = ({ children, open, ref }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!mounted || !open) return null;

  return ReactDOM.createPortal(
    <div
      className={clsx(
        "fixed inset-0 bg-black/70 backdrop-blur-sm z-9999 flex justify-center items-start pt-20 transition-opacity duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        ref={ref}
        className={clsx(
          "bg-black text-white w-full max-w-xl p-6 rounded-lg shadow-lg transform transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
