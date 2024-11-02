import React, { useState } from "react";

function TextExpander({
  collaspedNumWords = 10,
  expandButtonText = "Show more",
  collaspeButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split("").slice(0, collaspedNumWords).join("") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collaspeButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
