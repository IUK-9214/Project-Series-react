import React from 'react'
import data from './Data'
import { useState } from 'react'
function QuestionContainer() {



  const [Select, setSelect] = useState(null)
  const [enablemultiselection , setenablemultiselection]= useState(false);
  const [multipleId,setmultipleId]=useState([])



  

  const handlesingleclick = (getcurrentId) => {
    setSelect(getcurrentId === Select ? null : getcurrentId)
  }
  return (
    <>

      <div className='flex h-full w-full items-center justify-center flex-col gap-6 mt-5'>
          <button className='bg-blue-500 p-2'
          onClick={()=>enablemultiselection(!enablemultiselection)}
          >Enable multi selection</button>
        <div className='w-md '>

          {
            data && data.length > 0 ? (data.map(dataItem =>
              <div
                key={dataItem.id}
                className='bg-amber-800 mb-5 p-5'>
                
                <div className='flex justify-around '
                  onClick={() => handlesingleclick(dataItem.id)} >
                  <h3 className='font-bold '>{dataItem.Question}</h3>
                  <span>+</span>
                </div>
                {Select === dataItem.id ?
                  <div><p>{dataItem.Answer}</p></div>
                  : null
                }
              </div>

            )) : (<div>data not found</div>)

          }
        </div>
      </div>
    </>

  )
}

export default QuestionContainer