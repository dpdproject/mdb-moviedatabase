import Title from "../1.atoms/Title";
import Image from "../1.atoms/Image";

export default function ReviewCard({ author, content, created, updated, image }) {

    return (
        <div className="shadow-lg hover:shadow-2xl rounded-xl">
            <div className="p-10 w-176 h-96 ">
                <div className="flex items-center gap-5 mb-2">
                    <Image
                        className='w-14 h-14 rounded-full'
                        imageURL={image.avatar_path}
                    />
                    <Title 
                        className='text-xl mb-2 text-red-800'
                        text={author}
                    />
                </div>
                <div className="flex gap-x-5 text-sm">
                    <p>Created at: {created}</p>
                    <p>Updated at: {updated}</p>
                </div>
                <h3 className="mt-2 h-56 overflow-scroll">{content}</h3>
            </div>
        </div>
    )
}