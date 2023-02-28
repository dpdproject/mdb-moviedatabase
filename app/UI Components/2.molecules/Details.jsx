export default function Details(props) {
    return (
        <>
            <span className="">
                <h3 className='font-bold'>{props.title}</h3>
                {props.text}
            </span>
        </>
    )
}