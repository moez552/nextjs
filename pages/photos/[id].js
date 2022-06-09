export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    const ids = data.map(image=>{
return  {params:{id:image.id.toString()}}
    })
    return {
        paths: ids,
        fallback:false
    }
}
export const getStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/'+context.params.id)
    const data = await res.json()
    return {
        props:{image:data}
    }
}
 const Details = ({image}) =>
{return (  <div>
        <h1> image details</h1>
        <h3>{image.title}</h3>
        <h3>{image.url}</h3>
    </div>)
}
export default Details;