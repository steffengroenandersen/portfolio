import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  let className = "px-4 py-2 rounded-full ";

  switch (variant) {
    case "primary":
      className += "bg-blue-500 text-white";
      break;
    case "secondary":
      className += "bg-white text-blue-500 border border-blue-500";
      break;
    case "tertiary":
      className += "bg-white text-gray-500 border border-gray-500";
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
