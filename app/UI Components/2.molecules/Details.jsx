export default function Details(props) {

    return (
        <>
            <span>
                <h3 className='font-bold'>{props.title}</h3>
                {props.text}
            </span>
        </>
    )
}