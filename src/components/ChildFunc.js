import React from 'react'

function ChildFunc() {

  return <div><h1>memoization</h1> </div>

}

export default React.memo(ChildFunc);
