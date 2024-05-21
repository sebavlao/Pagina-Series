import { Card } from "./Card"

export const GlideComponent = ({ series }) => {

    return (
        <ul className="flex w-[100%] pl-[5%] gap-1 overflow-auto text-slate-50 py-5 items-center snap-mandatory snap-x" 
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