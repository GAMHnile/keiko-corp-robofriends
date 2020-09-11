import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

import * as actions from './actions';
import { mockStore } from './setupTests';

describe("setSearchfield action tests", ()=>{
    it("it adds text to action object", ()=>{
        const text = "abc";
        expect(actions.setSearchField(text)).toEqual({
            type: CHANGE_SEARCHFIELD,
            payload: text
        })
    })
})

describe("request robots thunk test", ()=>{
    let store;
    beforeEach(()=>{
        store = mockStore()
    })
    it("it dispatches pending action", ()=>{
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
    })
})