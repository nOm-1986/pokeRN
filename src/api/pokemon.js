import {API_HOST} from "../utils/constants";

const getPokemonsApi = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

//Funtion which connect with the server and gets pokemon details from a url.
const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
};

export { getPokemonsApi, getPokemonDetailsByUrlApi };