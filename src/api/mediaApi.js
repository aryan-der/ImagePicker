import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const PIXBAY_KEY = import.meta.env.VITE_PIXBAY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`
        }
    })
    return res.data;
}

export async function fetchVideos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page },
        headers: {
            Authorization: PEXELS_KEY
        }
    })
    return res.data;
}

export async function fetchGif(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/videos/', {
        params: {
            query,
            q: query,
            page,
            per_page,
            key: PIXBAY_KEY
        }
    })
    return res.data;
}

export async function fetchVectors(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: PIXBAY_KEY,
            q: query,
            page,
            per_page,
            image_type: 'vector'
        }
    })
    return res.data;
}

export async function fetchIcons(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: PIXBAY_KEY,
            q: query + " icon",
            page,
            per_page,
            image_type: 'vector'
        }
    })
    return res.data;
}

export async function fetchMemes(query, page = 1, per_page = 20) {
    const res = await axios.get('https://www.reddit.com/r/memes/search.json', {
        params: {
            q: query,
            restrict_sr: 1,
            sort: 'top',
            limit: per_page
        }
    })
    return res.data;
}

export async function fetchEmojis(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: PIXBAY_KEY,
            q: query + " emoji",
            page,
            per_page,
            image_type: 'illustration'
        }
    })
    return res.data;
}