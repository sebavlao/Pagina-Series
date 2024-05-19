import { Card } from "./Card"

export const GlideComponent = ({ series }) => {

    return (
        <ul className="flex gap-10 w-[75%] pl-3 overflow-auto text-slate-50 py-5 snap-x snap-mandatory" 
            style={
                {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none", 
                    "&::-webkit-scrollbar": {
                        display: "none" 
                }
            }}>
            {series.map(serieRecomendation => (
                <Card key={serieRecomendation.id} serieMap={serieRecomendation}/>
            ))}
        </ul>        
    )
}