import { Card } from "./Card"

export const GlideComponent = ({ series }) => {

    return (
        <ul className="flex w-[100%] sm:pl-[5%] max-sm:gap-2 overflow-auto text-slate-50 py-5 items-center sm:snap-mandatory snap-x" 
            style={
                {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none", 
                    "&::WebkitScrollbar": {
                        display: "none" 
                }
            }}>
            {series.map(serieRecomendation => (
                <Card key={serieRecomendation.id} serieMap={serieRecomendation}/>
            ))}
        </ul>        
    )
}