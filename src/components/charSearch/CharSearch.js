import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage as ErrorMsg} from 'formik';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './CharSearch.scss';

const setContent = (process, char) => {

    switch (process) {
        case 'waiting':
        case 'loading':
        case 'confirmed':
            return !char ? null : char.length > 0 ?
                    <div className="char__search-wrapper">
                        <div className="char__search-success">There is! Visit {char[0].name} page?</div>
                        <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                            <div className="inner">To page</div>
                        </Link>
                    </div> :
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>;
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default:
            throw new Error('Unexpected process state!');
    }
}

const CharSearch = () => {
    const [char, setChar] = useState(null);
    const {getCharacterName, clearError, process, setProcess} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (charName) => {
        clearError();
        
        getCharacterName(charName)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    return (
        <div className='char__search'>
            <div className="char__search-title">Or find a character by name:</div>
            <Formik
                initialValues={{ character: '' }}
                validate={({character}) => {
                    const errors = {};
                    if (!character) {
                        errors.character = 'This field is required';
                    }
                    return errors;
                }}
                onSubmit={({character}) => {
                    updateChar(character);
                }}>
                <Form className='char__search-wrapper'>
                    <Field type="text" name="character" placeholder='Enter name'/>
                    <button 
                        type="submit" 
                        className="button button__main"
                        disabled={process === 'loading'}>
                        <div className="inner">find</div>
                    </button>
                    <ErrorMsg name="character" component="div" className='char__search-error'/>
                </Form>
            </Formik>
            {setContent(process, char)}
        </div>
    );
}

export default CharSearch;