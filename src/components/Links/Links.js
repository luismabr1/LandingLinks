import Link from "next/link";

const Links = ({links}) => {
    
    return (
        <>
        {links.map(
            (link) => {
                return (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 " key={link.id}>
                        <Link href='/' >
                            <button className='border-2'>
                                <a className="p-4">
                                    {link.interno.modo.modulo1.name}
                                </a>
                            </button>
                        </Link>
                    </div>
                )
            }
        )}
        </>
    )
}

export default Links;