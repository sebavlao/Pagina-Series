export const Info = ({name, date, genres, seasons, description}) => {
    return (
    <article className="relative z-10 font-primary text-slate-50 w-[40%] flex flex-col gap-1 justify-center">
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className="flex gap-4 mb-10">
                <h4>{date ? date.slice(0, 4) : ''}</h4>
                <h4>{genres ? genres.map(genre => genre.name.split(" ")[0]).join("-") : ""}</h4>
                <h4>Seasons: {seasons ? seasons.length : ""}</h4>
            </div>
            <p className="font-medium text-xl text-ellipsis overflow-hidden">{description}</p>
    </article>
    )
}