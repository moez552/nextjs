import Link from "next/link"
import Image from "next/image"

export const getServerSideProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    return {
        props:{photos:data}
    }
}


const Photos = ({photos}) =>{
    

    return (
        <>
    <h1>Images listing</h1>
{photos.map(photo=>(
    <div>
        <Image src={photo.url} height={100} width={100} />
       <Link href={'/photos/'+photo.id} ><a>{photo.title}</a></Link> 
    </div>
))}
        </>
    )

}
export default Photos