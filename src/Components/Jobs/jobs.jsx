import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import api from '../../modules/api/api';
import { EMPLOYEES, JOBS } from '../../modules/api/endpoints';

function Jobs () {
    const [response, setResponse] = useState(null);

    useEffect( () => {
        api.fetch(EMPLOYEES).then( data  => {
            console.log(data);
            setResponse(data)
        })  
    }, []) 

    return (
        <div>
            {   response &&
                response.map( res => <div key={res.id}>{res.name}</div>)
            }


        </div>
    );
}

export default Jobs;