import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

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

const ComicsList = () => {

    const [comics, setComics] = useState([]),
          [newItemLoading, setNewItemLoading] = useState(false),
          [offset, setOffset] = useState(0),
          [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequestComics(offset, true);
    }, []);

    const onComicsLoaded = (newComics) => {
        let ended = false;

        if(newComics.length < 8) {
            ended = true;
        }

        setComics(comics => [...comics, ...newComics]);
        setNewItemLoading(false);
        setComicsEnded(ended);
        setOffset(offset => offset + 8);
    }

    const onRequestComics = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const drawComics = (comics) => {
        const items = comics.map(({id, title, thumbnail, price}, i) => {
            return (
                <CSSTransition 
                    key={i}
                    timeout={1000}
                    classNames="comics__item">
                    <li 
                        tabIndex='0'
                        className="comics__item">
                        <Link to={`/comics/${id}`}>
                            <img 
                                src={thumbnail}
                                alt={title} 
                                className="comics__item-img"/>
                            <div className="comics__item-name">{title}</div>
                            <div className="comics__item-price">{price}</div>
                        </Link>
                    </li>
                </CSSTransition>
            );
        });

        return (
            <ul className="comics__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        );
    }

    return (
        <div className="comics__list">
            {setContent(process, () => drawComics(comics), newItemLoading)}
            <button onClick={() => onRequestComics(offset, false)}
                    className="button button__main button__long"
                    disabled={process === 'loading' || comicsEnded}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;