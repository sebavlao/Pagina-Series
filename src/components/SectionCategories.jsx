import { GlideComponent } from "../components/generalComponentes/GlideComponent";
import { GenreCoincidence } from "../components/serieInfoComponents/GenreCoincidence";

export const SectionCateogories = ({ serie, series }) => {
    return (
        <section className="py-40 bg-gradient-to-r from-rose-700 to-gray-900 font-primary flex flex-col gap-9 overflow-hidden px-[5%]">
            <article className="flex items-center">
                <h1 className="text-[#1193BF] w-[15%] sm:text-8xl">You May Like</h1>
                <GlideComponent series={series}/>
            </article>
            {serie.genres.map(genre => (
                <article className="">
                <GenreCoincidence genre={genre}/>
                </article>
            ))}
        </section>
    )
}