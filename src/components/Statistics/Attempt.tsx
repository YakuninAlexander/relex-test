import React from 'react';

interface PromptProps{
  datetime: number
  time: string
  corrects: number
}

export default function Attempt({ corrects, datetime, time }: PromptProps) {

  function stringify(datetime: number) {
    
    const date = new Date(datetime)
    let dd: number|string = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let MM: number|string = date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;

    let yy: number|string = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    let hh: number|string = date.getHours();
    if (hh < 10) hh = '0' + hh;

    let mm: number|string = date.getMinutes() + 1;
    if (mm < 10) mm = '0' + mm;

    let ss: number|string = date.getSeconds() % 100;
    if (ss < 10) ss = '0' + ss;

    return `${dd}.${MM}.${yy} ${hh}:${mm}:${ss}`
  }

  return(
    <li className='py-2 px-3'>
      <p>{`Дата прохождения: ${stringify(datetime)}`}</p>
      <p>{`Затраченное время: ${time}`}</p>
      <p>{`Верных ответов: ${corrects}`}</p>
    </li>
  )
}