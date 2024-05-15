export const Image = ({ serieImg }) => {
    return (
        <article className=" relative  z-10 flex flex-col justify-center">
        <img className="rounded-3xl w-[250px] h-[400px]"  src={`https://image.tmdb.org/t/p/w500/${serieImg}`} alt="" />
        </article>
    )
}