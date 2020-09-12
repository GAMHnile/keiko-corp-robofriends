import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

import * as actions from './actions';
import { mockStore } from './setupTests';

import  apiCall  from './api/api'
jest.mock("./api/api");

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
        apiCall.mockImplementation(() => Promise.resolve("1"))
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
    })

    describe("success request robots",()=>{
        it("dispatches success action with data", ()=>{
            expect.assertions(1);
            apiCall.mockImplementation(() => Promise.resolve("1"))
            return store.dispatch(actions.requestRobots()).then(()=>{
                const action = store.getActions();
                expect(action[1]).toEqual({type: REQUEST_ROBOTS_SUCCESS, payload: "1"});
            })
        })
    })

    describe("Fail request robots",()=>{
        it("dispatches fail action with error", ()=>{
            expect.assertions(1);
            apiCall.mockImplementation(() => Promise.reject("noo!"))
            return store.dispatch(actions.requestRobots()).then(()=>{
                const action = store.getActions();
                expect(action[1]).toEqual({type: REQUEST_ROBOTS_FAILED, payload: "noo!"});
            })
        })
    })
});