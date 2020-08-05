import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeURL = url;

    if(country) {
        changeURL = `${url}/countries/${country}`;
    }

    try {
        // const response = await axios.get(url);

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeURL);

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
         console.log(error);
    }
}

export const fetchDailyData = async ()=> {
    try {
        // const response = await axios.get(`${url}/daily`);
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        // const response = await axios.get(`${url}/countries`);
        const { data: {countries} } = await axios.get(`${url}/countries`);
        // console.log(response);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}