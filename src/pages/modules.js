import { useEffect, useState } from 'react'
import Link from 'next/link'


const Modules = ({modules}) => {
    console.log(modules)
  return (
    <>
       <div className="py-16 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Escoja el modulo que utilizara</h2>
            </div>    

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 ">


        </div>
        {modules.map(
            (link) => {
                return (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 ">
                        <Link href={modules.url} key={link.id}>
                            <button className='border-2'>
                                <a className="p-4">
                                    {modules.name}
                                </a>
                            </button>
                        </Link>
                    </div>
                )
            }
        )}
    </div>
</div>
    </>
  )
}

export default Modules;