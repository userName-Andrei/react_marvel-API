import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharPage.scss';

const SingleCharPage = ({data}) => {

    const {thumbnail, name, description, comics} = data;

    const items = !comics ? [] : comics.map((comic, i) => {
        if(i > 9) return;
        return (
            <li key={i} 
                className="single-char__item">
                <Link to={`/comics/${comic.resourceURI.split('/').pop()}`}>{comic.name}</Link>
            </li>
        );
    })

    const comicsList = !comics ? null : comics.length ? <>
                        <div className="single-char__name">Comics:</div>
                        <ul className="single-char__comics">
                            {items}
                        </ul>
                        </> : null;

    return (
        <div className="single-char">
            <Helmet>
                <meta
                    name="description"
                    content={name}
                    />
                <title>{`Character - ${name}`}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-char__img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description}</p>
                {comicsList ? comicsList : null}
            </div>
        </div>
    );
}

export default SingleCharPage;