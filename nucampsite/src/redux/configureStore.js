import { createStore, CombineReducers } from 'redux';
import { Campsites } from './campsites';
import { Comment } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';



export const ConfigureStore = () => {
    const store = createStore(
        CombineReducers({
            campsites: Campsites,
            comments: Comment,
            partners: Partners,
            Promotions: Promotions
        })
    );

    return store;
};