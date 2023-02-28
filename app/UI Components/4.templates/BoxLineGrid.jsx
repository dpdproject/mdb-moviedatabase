import BoxLine from "../3.organisms/BoxLine";

export default function BoxLineGrid({boxOffice}) {

    const data = boxOffice.items;

    return (
        <div className="grid grid-col-2">
            {data.map((film) => (
                <BoxLine 
                    ranking={film.rank}
                    title={film.title}
                    weeks={film.weeks}
                />
            ))}
        </div>
    )
}