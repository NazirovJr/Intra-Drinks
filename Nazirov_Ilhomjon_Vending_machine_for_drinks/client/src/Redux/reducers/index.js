import { combineReducers } from 'redux';

import posts from './posts';
import purchase from "./purchase";

// Creating main reducer for global store
export const reducers = combineReducers({ posts, purchase });
