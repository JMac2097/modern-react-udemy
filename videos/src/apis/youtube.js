import axios from 'axios';

const KEY = 'AIzaSyBc887ExK-pLMnW_V6aArcJWfCJ0O_M8NY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

