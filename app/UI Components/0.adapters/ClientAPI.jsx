export const fetchAPI = async() => {

    try {
        const TheatersData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`)
        const TvData = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}`)
        const theatersRes = await TheatersData.json();
        const tvRes = await TvData.json();
        
        const res = {
            theatersRes,
            tvRes
        }

        return res
    } catch (e) {
        throw new Error('Sorry, we failed to load data.')
    }

}

export async function fetchMovieDetails(slug, id) {

    const key = process.env.API_KEY;

    try {
        const tempData = await fetch(`https://api.themoviedb.org/3/${slug}/${id}?api_key=${key}`)
        const tempImages = await fetch(`https://api.themoviedb.org/3/${slug}/${id}/images?api_key=${key}`)
        const tempReviews = await fetch(`https://api.themoviedb.org/3/${slug}/${id}/reviews?api_key=${key}`)
        const data = await tempData.json();
        const images = await tempImages.json();
        const reviews = await tempReviews.json()
        const res = {...data, images, reviews}

        return res
    } catch (e) {
        throw new Error('Sorry, it was not possible to load datas of the movie you selected.')
    }
}
