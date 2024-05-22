export const Info = ({name, date, genres, seasons, description}) => {
    return (
    <article className="relative z-10 font-primary text-slate-50 sm:w-[40%] flex flex-col justify-center self-center h-[250px]">
            <h1 className="sm:text-5xl text-4xl font-bold">{name}</h1>
            <div className="flex gap-4 mb-10">
                <h4>{date ? date.slice(0, 4) : ''}</h4>
                <h4>{genres ? genres.map(genre => genre.name.split(" ")[0]).join("-") : ""}</h4>
                <h4>Seasons: {seasons ? seasons.length : ""}</h4>
            </div>
            <p className="font-medium overflow-auto custom-scrollbar pr-2">{description}</p>
    </article>
    )
}