import React, {
    useContext,
    useReducer,
    useEffect
} from 'react';
import {
    GlobalContext
} from './GlobalState';

function reducer(state, action) {
    switch (action.type) {
        case 'make-req':
            return {
                loading: true, jobs: [], error: false
            };
        case 'get-data':
            return {
                ...state, jobs: action.payload, loading: false, error: false
            };
        case 'errors':
            return {
                ...state, error: true, jobs: [], loading: false
            };
        case 'has-next-page':
            return {
                ...state, hasNextPage: action.payload
            }
            default:
                return state
    }
}
export default function useFetchJobs(page, params) {
    const [state, dispatch] = useReducer(reducer, {
        loading: true,
        jobs: [],
        error: false,
        hasNextPage: false
    });
    const allowCors = "https://stark-mesa-12909.herokuapp.com";
    const ProductionBaseUrl = `${allowCors}/https://jobs.github.com/positions.json`;
    useEffect(() => {
        let url = `${ProductionBaseUrl}?description=${params.description}&location=${params.location}&full_time=${params.full_time}&page=${page}&markdown=true`;
        let nextPageUrl = `${ProductionBaseUrl}?description=${params.description}&location=${params.location}&full_time=${params.full_time}&page=${page + 1}&markdown=true`;

        dispatch({
            type: 'make-req'
        });
        async function getJobs() {
            await fetch(url, {
                'Access-Control-Allow-Origin': true,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => {
                if (!res.ok) {
                    dispatch({
                        type: 'errors',
                        payload: true
                    });
                    throw new Error(res.status);
                }
                return res.json();
            }).then(data => {
                dispatch({
                    type: 'get-data',
                    payload: data
                });
            }).catch(error => {
                dispatch({
                    type: 'errors',
                    payload: true
                });
            });
            // checking to see if there is a next page 
            await fetch(nextPageUrl, {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                return res.json();
            }).then(data => {
                dispatch({
                    type: 'has-next-page',
                    payload: data.length !== 0
                });
            }).catch(error => {
                dispatch({
                    type: 'errors',
                    payload: true
                });
            });
        }
    getJobs();
    }, [params, page]);
    return state;
}