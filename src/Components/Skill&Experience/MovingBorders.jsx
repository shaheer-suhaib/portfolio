import React from "react";
import "./MovingBorders.css";

const MovingBorders = ({
  children,
  duration = 10000,
  borderRadius = "1.75rem",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`moving-border-container ${className}`}
      style={{
        borderRadius: borderRadius,
        ...style,
      }}
    >
      <div
        className="moving-border"
        style={{
          animationDuration: `${duration / 1000}s`,
        }}
      />
      <div className="moving-border-content">{children}</div>
    </div>
  );
};

export default MovingBorders;

