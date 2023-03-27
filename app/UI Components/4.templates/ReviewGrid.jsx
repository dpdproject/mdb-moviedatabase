import ReviewCard from "../3.organisms/ReviewCard";

export default function ReviewGrid({ reviews }) {
  return (
    <div className="flex flex-nowrap gap-x-10 overflow-x-scroll snap-x snap-mandatory py-10 md:px-5">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          author={review.author}
          content={review.content}
          created={review.created_at}
          updated={review.updated_at}
          id={review.id}
          url={review.url}
          image={review.author_details}
        />
      ))}
    </div>
  )
}