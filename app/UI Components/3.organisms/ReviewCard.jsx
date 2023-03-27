import Title from "../1.atoms/Title";
import Image from "../1.atoms/Image";

export default function ReviewCard({ author, content, created, updated, image }) {

    function formatDate(date) {
        const tempDate = new Date(`${date}`);
        const newDate = tempDate.toLocaleString('it');

        if (newDate[1] == '/') {
            const finalDate = newDate.slice(0, 8);
            return finalDate
        } else {
            const finalDate = newDate.slice(0, 9);
            return finalDate
        }
    }
    
    const createdDate = formatDate(created);
    const updatedDate = formatDate(updated);

    return (
        <div className="shadow-lg hover:shadow-2xl rounded-xl">
            <div className="p-4 md:p-10 w-60 md:w-176 h-96 md:h-96 ">
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
                <div className="flex gap-x-2 md:gap-x-5 text-sm">
                    <p>Created at: {createdDate}</p>
                    <p>Updated at: {updatedDate}</p>
                </div>
                <h3 className="mt-2 h-56 overflow-scroll">{content}</h3>
            </div>
        </div>
    )
}