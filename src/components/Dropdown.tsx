import React, { useState } from 'react';

interface DropdownProps {
  data: {
    id: number
    str: string
  }[]
}

export default function Dropdown({data}: DropdownProps) {
  const [vis, setVis] = useState<boolean>(false);
  function onClickHandler(e:any) {
    setVis(!vis);
  }

  return(
    <div className='relative mx-auto w-[560px] font-light'>
      <input 
        type='text'
        className='cursor-pointer border py-2 px-4 w-full h-[42px] mb-2 text-center'
        value={'Click me'}
        onClick={() => setVis(!vis) }
        readOnly
      />
      { vis && 
        <ul className='z-50 list-none text-center absolute top-[42px] left-0 right-0 overflow-y-scroll max-h-[200px] shadow-md bg-white'>
          <li 
              key={-1}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
              onClick={onClickHandler}
            >
              Click me
            </li>
          { data.map((data) => (
            <li 
              key={data.id}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
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