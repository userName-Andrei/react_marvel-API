import React, {Component} from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        chars: [],
        loading: true,
        newItemLoading: false,
        error: false,
        charsOffset: 210,
        charsEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequestChars();
    }

    // герои загружены
    onCharsLoaded = (newChars) => {
        let ended = false;

        if (newChars.length < 9) {
            ended = true
        }

        this.setState(state => ({
            chars: [...state.chars, ...newChars],
            loading: false,
            error: false,
            newItemLoading: false,
            charsOffset: state.charsOffset + 9,
            charsEnded: ended
        }));
    }

    // загрузка пока выполняется запрос
    onCharsLoading = () => {
        this.setState({
            newItemLoading: true,
            error: false
        });
    }

    // в случае ошибки
    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    // метод отправки запроса
    onRequestChars = (offset) => {
        this.onCharsLoading();

        this.marvelService.getAllCharacters(offset)
            .then(this.onCharsLoaded)
            .catch(this.onError);
    }

    refsArray = [];

    setRefs = elem => {
        this.refsArray.push(elem);
    }

    focusItem = (id) => {
        this.refsArray.forEach(ref => ref.classList.remove('char__item_selected'));
        this.refsArray[id].classList.add('char__item_selected');
        this.refsArray[id].focus();
    }

    // метод отрисовки героев
    drawChars = (chars) => {
        const items = chars.map(({thumbnail, name, id}, i) => {
            return (
                <li key={id}
                    ref={this.setRefs} 
                    className="char__item"
                    onClick={() => {
                        this.props.onCharSelected(id);
                        this.focusItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(id);
                            this.focusItem(i);
                        }
                    }}
                    tabIndex='0'> 
                    <img src={thumbnail}
                        style={/image_not_available/.test(thumbnail) ? {objectFit: 'contain'} : null}
                        alt={name}/>
                    <div className="char__name">{name}</div>
                </li>
            );
        });

        return (
            <ul className="char__grid">
                {items}
            </ul>
        );
    }
    
    render() {
        const {chars, loading, error, charsOffset, newItemLoading, charsEnded} = this.state,
                errorMessage = error ? <ErrorMessage /> : null,
                spinner = loading ? <Spinner /> : null,
                content = !(loading || error) ? this.drawChars(chars) : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long"
                        onClick={() => this.onRequestChars(charsOffset)}
                        disabled={newItemLoading || charsEnded}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    };
}

export default CharList;