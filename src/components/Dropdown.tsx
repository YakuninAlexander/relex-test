import React, { useState } from 'react';

interface DropdownProps {
  data: {
    id: number
    str: string
  }[],
  setFilter: React.Dispatch<React.SetStateAction<number>>
}

export default function Dropdown({data, setFilter}: DropdownProps) {
  const [vis, setVis] = useState<boolean>(false);
  const [input, setInput] = useState('Click me')
  function onClickHandler(e:any) {
    setVis(!vis);
    setInput(e.target.innerText)
    setFilter(e.target.value)
  }

  return(
    <div className='relative w-[560px] mx-auto  font-light'>
      <input 
        type='text'
        className='cursor-pointer w-full h-[42px] mb-2 py-2 px-4 border-neutral-300 border text-center focus:outline focus:border-pr-purple-400'
        value={input}
        onClick={() => {setVis(!vis);} }
        readOnly
      />
      { vis && 
        <ul className='absolute max-h-[200px] top-[42px] left-0 right-0 overflow-y-scroll bg-white text-center list-none shadow-md z-50'>
          <li 
              key={-1}
              value={-1}
              className='py-2 px-4 hover:bg-pr-purple-300 hover:text-neut-blgr-50 transition-colors cursor-pointer'
              onClick={onClickHandler}
            >
              Click me
            </li>
          { data.map((data) => (
            <li 
              key={data.id}
              value={data.id}
              className='py-2 px-4 hover:bg-pr-purple-300 hover:text-neut-blgr-50 transition-colors cursor-pointer'
              onClick={onClickHandler}
            >
              { data.str }
            </li>
          ))}
        </ul>
      }
    </div>
  )
}