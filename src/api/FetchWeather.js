import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY= 'c101e5a4910bb529ded525fba6b1ac75'


export const FetchWeather = async (query) => {

    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data
}

