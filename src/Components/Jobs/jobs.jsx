import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import useFetch from '../../hooks/useFetch';
import { apiActions } from '../../modules/api/actions';
import api from '../../modules/api/api';
import { JOBS } from '../../modules/api/endpoints';

const Jobs = () => {

    const {response, performFetch} = useFetch(JOBS);

    useEffect( () => {
        performFetch();
    }, [performFetch]);

    console.log(response);
    // const state = useSelector(state => state.api.jobs);
    // const dispatch = useDispatch();
    // console.log(state);

    // useEffect(async () => {
    //     try {
    //         dispatch(apiActions.fetch(JOBS));

    //         const data = await api.fetch(JOBS);

    //         dispatch(apiActions.fetchSuccess(JOBS, data));
    //     } catch(e) {
    //         dispatch(apiActions.fetchFailure(JOBS, e))
    //     }


    // }, [])



    return (
        <div>
            
            {   response.data &&
                response.data.map( res => <div key={res.id}>{res.title}</div>)
            }
        </div>
    );
};

export default Jobs;