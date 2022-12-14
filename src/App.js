import React from "react";

function App() {
  const value = "World";

  const onClick = async () => {
    const result = await fetch("/api/CreateEvaluation");
    console.log(await result.json());
  };

  return (
    <div>
      Hello {value}
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
