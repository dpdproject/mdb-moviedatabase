export const fetchAPI = async(media, type) => {

    try {
        const data = await fetch(`https://api.themoviedb.org/3/${media}/${type}?api_key=${process.env.API_KEY}`)
        const res = await data.json();

        return res
    } catch (e) {
        throw new Error('Sorry, we failed to load data.')
    }

}

export const fetchMovieDetails = async(slug, id) => {

    try {
        const data = await fetch(`https://api.themoviedb.org/3/${slug}/${id}?api_key=${process.env.API_KEY}`)
        const images = await fetch(`https://api.themoviedb.org/3/${slug}/${id}/images?api_key=${process.env.API_KEY}`)
        const tempData = await data.json();
        const tempImages= await images.json();

        const res = { tempData, tempImages }

        console.log(res)

        return res
    } catch (e) {
        throw new Error('Sorry, it was not possible to load datas of the movie you selected.')
    }

}