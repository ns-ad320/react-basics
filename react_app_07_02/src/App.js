import React from "react";

/*
Keeping components pure 
Some JavaScript functions are pure. A pure function:

Minds its own business. It does not change any objects or variables that existed before it was called.
Same inputs, same output. Given the same inputs, a pure function should always return the same result.
By strictly only writing your components as pure functions, 
you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. 
Here is an example of an impure component:
*/

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <React.Fragment>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </React.Fragment>
  );
}
