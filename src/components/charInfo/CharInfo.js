import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {
   
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    // герой загружен
    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false,
            error: false
        });
    }

    // загрузка пока выполняется запрос
    onCharLoading = () => {
        this.setState({
            loading: true
        });
    }

    // в случае ошибки 
    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state,
            skeleton = char || loading || error ? null : <Skeleton/>,
            errorMessage = error ? <ErrorMessage /> : null,
            spinner = loading ? <Spinner /> : null,
            content = !(loading || error || !char) ? <View char={char} /> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = char;

    const drawComics = (arr) => {
        if (typeof(arr) === 'undefined') return;
        if (arr.length === 0) return "Comics of this character is not found.";

        const items = arr.map((comic, i) => {
            // eslint-disable-next-line
            if(i > 9) return;
            return (
                <li key={i} 
                    className="char__comics-item">
                    <a href={comic.resourceURI}>{comic.name}</a>
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