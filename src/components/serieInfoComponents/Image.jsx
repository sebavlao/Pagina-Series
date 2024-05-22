export const Image = ({ serieImg }) => {
    return (
        <article className="relative  z-10 flex-col justify-center hidden sm:flex">
            <img className="rounded-3xl w-[250px] h-[400px]"  src={`https://image.tmdb.org/t/p/w500/${serieImg}`} alt="" />
        </article>
    )
}