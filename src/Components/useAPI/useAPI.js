import { useEffect, useState } from 'react';
import axios from 'axios';

const useAPI = (endpoint) => {
    const [bedData, setBedData] = useState([]);

    useEffect(() => {
        getBedData()
    }, []);

    const getBedData = async() => {
        const response = await axios.get(endpoint);
        setBedData(response.bedData);
    };

    return bedData
}

export default useAPI;
