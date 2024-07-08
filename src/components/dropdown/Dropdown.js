import React, { useState, useEffect } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldDisplayContent, setShouldDisplayContent] = useState(false);

  const display = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setShouldDisplayContent(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setShouldDisplayContent(false), 250); // Adjusted to 0.5s
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="Dropdown__container">
      <div className="Dropdown__title" onClick={display}>
        <h2>{title}</h2>
        <p>
          <i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
        </p>
      </div>
      <div
        className={`dropdown__content ${shouldDisplayContent ? "show" : ""}`}
      >
        {shouldDisplayContent && (
          <p className="Dropdown__contentText">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
