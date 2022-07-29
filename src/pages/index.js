import { useEffect, useState } from 'react'
import Link from 'next/link'


const Home = () => {

  return (
    <>
       <div className="py-16 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Escoja el uso que le dara al acceso</h2>
            </div>    

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 ">
        <Link href='/internos'>
            <button className='border-2'>
                <a className="p-4">
                    Interno
                </a>
            </button>
        </Link>
        <Link href='/externos'>
            <button className='border-2'>
                <a className="p-4">
                    Externo
                </a>
            </button>
        </Link>
        </div>

    </div>
</div>
    </>
  )
}



export default Home

