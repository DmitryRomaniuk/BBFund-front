// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
  GET_LIST_ROUTES_ASYNC_REQUEST,
  GET_LIST_ROUTES_ASYNC_SUCCESS,
  GET_LIST_ROUTES_ASYNC_FAILURE,
} from '../action/homePage';

const initialState = Immutable.fromJS({});

const homeReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case GET_LIST_ROUTES_ASYNC_REQUEST:
        return state;
    case GET_LIST_ROUTES_ASYNC_SUCCESS:
        return state.set('listRoutes', Immutable.fromJS(action.payload));
    case GET_LIST_ROUTES_ASYNC_FAILURE:
        return state;
    default:
        return state;
    }
};

export default homeReducer;
