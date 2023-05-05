import React, { useState } from "react";

function DisableButton() {
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (e) => {
    setDisabled(!e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button disabled={disabled}>Click me</button>
    </div>
  );
}

export default DisableButton;
