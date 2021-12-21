import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { EMPLOYEES } from '../../modules/api/endpoints';
import { Container } from "@mui/material";
import ProfileGrid from './ProfileGrid';
import useFetch from '../../hooks/useFetch';


const drawerWidth = 240;

function Employees () {
    const {response, performFetch} = useFetch(EMPLOYEES);
    const {loading, data} = response;

    useEffect( () => {
        performFetch();
    }, [performFetch]) 


    return (
        <Container>
            <ProfileGrid profiles={data} loading={loading}/>
        </Container>
    );
}

export default Employees;