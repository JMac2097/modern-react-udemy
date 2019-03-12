import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d1831f07227b7250c941e0435276ff3980f08a1f12bfb67d31681cc6442510e1'
    }
});