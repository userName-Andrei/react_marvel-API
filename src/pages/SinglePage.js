import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppBanner from '../components/appBanner/AppBanner';
import useMarvelService from '../services/MarvelService';
import setContent from '../utils/setContent';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    const {getCharacter, getComic, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateData(id);
    }, [id]);

    const onDataLoaded = (data) => {
        setData(data);
    }

    const updateData = (id) => {
        clearError();

       switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
                break;
       }
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;