import Link from "next/link";

const Button = (props) => {
    return (
        <button className='bg-red-800 rounded-md px-2 py-1 w-fit self-center hover:bg-red-700 active:bg-red-900'>
            <Link href={props.url}>{props.text}</Link>
        </button>
    )
}

export default Button;