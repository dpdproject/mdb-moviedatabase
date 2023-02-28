import Title from "../1.atoms/Title"
import BoxInfo from "../2.molecules/BoxInfo"

export default function BoxLine(props) {
    return (
        <div className="flex bg-red-700 content-center items-center justify-center rounded-lg">
            <Title 
                className={"basis-1/6"}
                text={props.ranking}
            />
            <div className="basis-1/2">
                <Title 
                    className={"font-bold"}
                    text={props.title}
                />
                <BoxInfo />
            </div>
            <Title 
                className={"basis-1/4"}
                text={`${props.weeks} W`}
            />
        </div>
    )
}