import React from 'react';

export default function TestCard() {
  return(
    <div className='grid grid-rows-[15%_65%_5%_15%] mt-5 w-[500px] h-[300px] bg-orange-200 rounded-3xl shadow-lg hover:bg-orange-300 px-4'>
    
      <h3 className='text-3xl font-light pt-1 text-center'>Test #1</h3>
      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione cum aspernatur consequuntur sint nostrum natus nemo ipsa repellendus placeat ad dolorum illum molestias et voluptas, in aut facilis saepe perferendis fuga dicta, earum doloremque repellat id? Eveniet, facilis libero.</p>
      
      <p className='items-end text-xs text-right font-light'>15 questions</p>
      <div className='items-center flex justify-between'>
        <label className='font-medium'>
          <input className='mr-2' type='checkbox'/>
          visibility
        </label>
        <button className='px-1 rounded-md bg-red-500 hover:bg-red-600 shadow-md'>Delete test</button>
      </div>
    </div>
  )
}