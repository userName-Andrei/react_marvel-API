import {useState, useEffect, useRef, useMemo} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const setContent = (process, Component, newItem) => {

    switch (process) {
        case 'waiting':
            return <Spinner/>;
            break;
        case 'loading':
            return newItem ? <Component /> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component />;
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default:
            throw new Error('Unexpected process state!');
    }
}

const CharList = (props) => {

    const [chars, setChars] = useState([]),
        [newItemLoading, setNewItemLoading] = useState(false),
        [charsOffset, setCharsOffset] = useState(210),
        [charsEnded, setCharsEnded] = useState(false);

    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequestChars(charsOffset, true);
    }, []);

    // герои загружены
    const onCharsLoaded = (newChars) => {
        let ended = false;

        if (newChars.length < 9) {
            ended = true;
        }

        setChars(chars => [...chars, ...newChars]);
        setNewItemLoading(false);
        setCharsOffset(charsOffset => charsOffset + 9);
        setCharsEnded(ended);
    }

    // метод отправки запроса
    const onRequestChars = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllCharacters(offset)
            .then(onCharsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const refsArray = useRef([]);

    const focusItem = (id) => {
        refsArray.current.forEach(ref => ref.classList.remove('char__item_selected'));
        refsArray.current[id].classList.add('char__item_selected');
        refsArray.current[id].focus();
    }

    // метод отрисовки героев
    const drawChars = (chars) => {
        const items = chars.map(({thumbnail, name, id}, i) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames='char__item'
                    mountOnEnter>
                        <li 
                            ref={(elem) => refsArray.current[i] = elem} 
                            className="char__item"
                            onClick={() => {
                                props.onCharSelected(id);
                                focusItem(i);
                            }}
                            onKeyPress={(e) => {
                                if (e.key === ' ' || e.key === "Enter") {
                                    props.onCharSelected(id);
                                    focusItem(i);
                                }
                            }}
                            tabIndex='0'> 
                            <img src={thumbnail}
                                style={/image_not_available/.test(thumbnail) ? {objectFit: 'contain'} : null}
                                alt={name}/>
                            <div className="char__name">{name}</div>
                        </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        );
    }

    const elements = useMemo(() => {
        return setContent(process, () => drawChars(chars), newItemLoading);
    }, [process]);

    return (
        <div className="char__list">
            {elements}
            <button className="button button__main button__long"
                    onClick={() => onRequestChars(charsOffset, false)}
                    disabled={newItemLoading || charsEnded}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;