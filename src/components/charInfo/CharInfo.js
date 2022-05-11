import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const {charId} = props;

    const {clearError, process, setProcess, getCharacter} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [charId]);

    // герой загружен
    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        
        if(!charId) {
            return;
        }

        clearError();

        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }
    
    // const skeleton = char || loading || error ? null : <Skeleton/>,
    //       errorMessage = error ? <ErrorMessage /> : null,
    //       spinner = loading ? <Spinner /> : null,
    //       content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
            {/* {skeleton}
            {errorMessage}
            {spinner}
            {content} */}
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = data;

    const drawComics = (arr) => {
        if (typeof(arr) === 'undefined') return;
        if (arr.length === 0) return "Comics of this character is not found.";

        const items = arr.map((comic, i) => {
            // eslint-disable-next-line
            if(i > 9) return;
            return (
                <li key={i} 
                    className="char__comics-item">
                    <Link to={`/comics/${comic.resourceURI.split('/').pop()}`}>{comic.name}</Link>
                </li>
            );
        });

        return (
            <ul className="char__comics-list">
                {items}
            </ul>
        );
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} 
                    style={/image_not_available/.test(thumbnail) ? {objectFit: 'contain'} : null}
                    alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            {drawComics(comics)}
        </>
    );
}

export default CharInfo;