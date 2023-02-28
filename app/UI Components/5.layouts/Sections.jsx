import Title from "../1.atoms/Title"
import MovieGrid from "../4.templates/MovieGrid"

export default function Sections(props) {
    return (
        <section className="">
            <span className="p-5">
                <Title 
                    text={props.sectionTitle}
                    className={'text-xl'}
                />
                <h2 className="text-sm italic">{props.subtitle}</h2>
            </span>
            <MovieGrid 
                category={props.category}
                slug={props.slug}
            />
        </section>
    )
}