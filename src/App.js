import { useEffect, useRef } from 'react'

import ElementScroll from './pages/ElementScroll'
import WindowScroll from './pages/WindowScroll'
function App() {

  const spanRef = useRef(null);

  useEffect(() => {
    console.log("spanRef : ", spanRef)
  }, [])

  return (
    <div className="App">

      <span ref={spanRef}>메롱</span>

      <ElementScroll/>
      {/* <WindowScroll/> */}
    </div>
  );
}

export default App;

// https://doqtqu.tistory.com/125