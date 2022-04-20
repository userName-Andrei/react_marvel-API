

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public';
    _apiKey = 'apikey=8826ffc58611993cdd7dc1c1dfc83c2a';
    _baseOffset = 210;

    getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);

        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        const {id, name, description, thumbnail, comics} = char;

        return {
            id,
            name: name,
            description: description ? `${description.slice(0, 200)}...` : 'Description not found.',
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: comics.items
        };
    }
}

export default MarvelService;