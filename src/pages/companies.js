import Link from 'next/link'
import Links from '../components/Links/Links'

const Companies = ({links}) => {
  return (
    <>
       <div className="py-16 bg-white">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Escoja la empresa que representa</h2>
            </div>    

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <Link href='/'>
                <a className="p-4">
                    <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" className="" alt=""/>
                </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" className="w-32 " alt=""/>
            </a>
        </Link> 
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" className="w-32 " alt=""/>
            </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" className="w-32 " alt=""/>
            </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" className="w-32" alt=""/>
            </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" className="w-32" alt=""/>
            </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" className="w-20" alt=""/>
            </a>
        </Link>
        <Link href='/'>
            <a className="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" className="w-24" alt=""/>
            </a>
        </Link>
        <Links links={links}/>
        </div>
    </div>
</div>
    </>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/v1/links/')
    const links = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        links,
      },
    }
  }

export default Companies