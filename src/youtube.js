import axios from 'axios';

const API_END_POINT = 'https://www.googleapis.com/youtube/v3';
const KEY = 'AIzaSyAvj-WxzdGa2Vwwi_smIems9pPhLG1pn5I';

const search = async (query) => {
    const result = await axios.get(`${API_END_POINT}/search`, {
        params: {
            key: KEY,
            part: 'snippet',
            maxResults: 10,
            q: query,
        },
    });
    return result.data.items;
};

export { search };
