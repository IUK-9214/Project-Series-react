import React from "react"
import PicScroller from "./Component/PicScroller"

function App() {
  

  return (
    <>
    <h1 className="text-3xl text-center font-bold">The pic scroller project</h1>
   <PicScroller
    url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} 
   />
    </>
  )
}

export default App
