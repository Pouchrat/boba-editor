import React from "react";

let color = "#ff5252";

const Spinner: React.FC<{ width: number; margin: number }> = (props) => {
  let width = props.width || 40;
  let margin = props.margin || width / 10;
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>{`
        .lds-ring {
          display: inline-block;
          position: relative;
          width: ${width}px;
          height: ${width}px;
          opacity: 0.5;
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: ${width - margin * 2}px;
          height: ${width - margin * 2}px;
          margin: ${margin}px;
          border: ${margin}px solid ${color};
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: ${color} transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;