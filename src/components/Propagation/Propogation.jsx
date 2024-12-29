import React from "react";
import "./propagation.css";
const Propogation = () => {
  const handleGrandParents = () => {
    console.log("Grand Parent is Clicked");
  };
  const handleParents = () => {
    console.log("Parents is Clicked");
  };
  const handleChild = () => {
    console.log("Child Is Clicked");
  };
  return (
    <>
      {/* Bubbling Phase */}
      <div onClick={handleGrandParents} className="grand-p">
        <div onClick={handleParents} className="parents">
          <div onClick={handleChild} className="child">
            Child (Bubbling Phase)
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      {/* Capturing Phase */}
      <div onClickCapture={handleGrandParents} className="grand-p">
        <div onClickCapture={handleParents} className="parents">
          <div onClickCapture={handleChild} className="child">
            Child (Capturing Phase)
          </div>
        </div>
      </div>
    </>
  );
};

export default Propogation;
