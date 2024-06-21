import React, { useState } from "react";

const Dropdown = ({ title, content }) =>    {              //title and content of the dropdown
  //declaration of the state by using the Hook usestate()
  const [isOpen, setIsOpen] = useState(false); // defining the toggle state

  //Function to manage the display of the dropdown content
  const display = () => {
    setIsOpen(!isOpen); };     

  return (
    // display the dripdown closed by default ,open it on click and close it on another click and shows the respective icon
    <div className="Dropdown__container">
      <div className="Dropdown__title"><h2>{title}</h2>
        <p onClick={display}>{isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      
      <div className="dropdown__content">   
        {isOpen && <p className="Dropdown__contentText">{content}</p>}                
      </div>
    </div>
  );
};

export default Dropdown;
