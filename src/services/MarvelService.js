import {useHTTP} from '../hooks/http.hook';

const useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHTTP();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public';
    const _apiKey = 'apikey=8826ffc58611993cdd7dc1c1dfc83c2a';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);

        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterName = async (name) => {
        const res = await request(`${_apiBase}/characters?name=${name}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    }

    const getAllComics = async (offset) => {
        const res = await request(`${_apiBase}/comics?issueNumber=10&limit=8&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformComic);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);

        return _transformComic(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        const {id, name, description, thumbnail, comics} = char;

        return {
            id,
            name: name,
            description: description ? description : 'Description not found.',
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: comics.items
        };
    }

    const _transformComic = (comic) => {
        const {id, title, description, thumbnail, pageCount, prices, urls} = comic;

        return {
            id,
            title,
            description: description ? description : 'Description not found.',
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            language: comic.textObjects.language || 'en-us',
            pageCount,
            url: urls[0].url,
            price: prices[0].price ? `${prices[0].price}$` : `NOT AVAILABEL`
        };
    }

    return {clearError, 
            process,
            setProcess, 
            getAllCharacters, 
            getCharacter, 
            getCharacterName, 
            getAllComics, 
            getComic}
}

export default useMarvelService;