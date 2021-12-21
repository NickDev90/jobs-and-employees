import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import useFetch from '../../hooks/useFetch';
import { apiActions } from '../../modules/api/actions';
import api from '../../modules/api/api';
import { JOBS } from '../../modules/api/endpoints';
import ResponsiveDrawer from '../Common/ResponsiveDrawer';

const Jobs = () => {

    const {response, performFetch} = useFetch(JOBS);
    const {data, loading} = response;

    useEffect( () => {
        performFetch();
    }, [performFetch]);

    console.log(response);

    return <ResponsiveDrawer jobs={data} loading={loading}/>
};

export default Jobs;