const Image = (props) => {

    const imagePath = 'https://image.tmdb.org/t/p/original/';

    return (
        <img src={imagePath + props.imageURL} className={props.className}></img>
    )
}

export default Image;