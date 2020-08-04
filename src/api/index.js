import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        // const response = await axios.get(url);

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        // const modifiedData = {
        //     confirmed, 
        //     recovered, 
        //     deaths,
        //     lastUpdate
        // }

        // console.log(response);
        // return modifiedData;
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
}

export const fetchDailyData = async ()=> {
    try {
        // const response = await axios.get(`${url}/daily`);
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
    } catch (error) {

    }
}