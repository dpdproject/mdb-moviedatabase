const Pill = (props) => {
    return (
        <p className='border-2 border-red-900 rounded-md px-2 py-1 w-fit self-center'>
            {props.text}
        </p>
    )
}

export default Pill;