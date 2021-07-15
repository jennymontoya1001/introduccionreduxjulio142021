import {types} from './types';

export const login = (id,displayName) => {
    return{
        type: types.login,
        payload:{
            id,
            displayName
        }
    }
}