import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import api from '../../modules/api/api';
import { EMPLOYEES, JOBS } from '../../modules/api/endpoints';

function Employees () {
    const [response, setResponse] = useState(null);

    useEffect( () => {
        api.fetch(EMPLOYEES).then( data  => {
            console.log(data);
            setResponse(data)
        })  
    }, []) 

    return (
        <div>
            Employees compo

            {   response &&
                response.map( res => <div key={res.id}>{res.name}<img style={{display: 'block', width: '50px'}} src={res.avatar}/></div>)
            }


        </div>
    );
}

export default Employees;