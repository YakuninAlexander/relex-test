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
    <div className='relative mx-auto w-[560px] font-light'>
      <input 
        type='text'
        className='cursor-pointer border focus:outline focus:border-pr-purple-400 border-neutral-300 py-2 px-4 w-full h-[42px] mb-2 text-center'
        value={input}
        onClick={() => {setVis(!vis);} }
        readOnly
      />
      { vis && 
        <ul className='z-50 list-none text-center absolute top-[42px] left-0 right-0 overflow-y-scroll max-h-[200px] shadow-md bg-white'>
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