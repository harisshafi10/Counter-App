import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const decrement = ()=>{
        setCount(count - 1);
    }
    const increment = ()=>{
        setCount(count + 1);
    }
    const reset =()=>{
        setCount(0);
    }

  return (
    <div className='bg-slate-900 text-yellow-300 flex h-screen items-center text-center justify-center'>
        <div className='bg-slate-900/10  shadow-black  h-[360px] shadow-xl w-72 flex flex-col gap-10 rounded-xl'>
        <h1 className='text-3xl font-extrabold'>COUNTER APP</h1>
        <p className='text-3xl font-bold text-yellow-200'>{count}</p>
       <div className=' flex  gap-5 justify-center'>
       <button onClick={decrement}className='px-10 h-10 text-2xl bg-slate-700 rounded-xl outline-none active:scale-95 shadow-lg hover:bg-slate-600 active:shadow-inner shadow-black'>-</button>
       <button onClick={increment}className='px-10 h-10 text-2xl bg-slate-700 rounded-xl outline-none active:scale-95 shadow-lg hover:bg-slate-600 active:shadow-inner shadow-black'>+</button>
       </div>
       <button onClick={reset}className='px-10 h-10 w-32 mx-auto text-center text-2xl bg-slate-700 rounded-xl active:scale-95 outline-none shadow-lg hover:bg-slate-600 active:shadow-inner shadow-black'>Reset</button>
        </div>
    </div>
  )
}

export default Counter