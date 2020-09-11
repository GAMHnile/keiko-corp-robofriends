import React from 'react';
import CounterButton from './CounterButton';
import {shallow} from 'enzyme';

describe("Counter Button tests",()=>{
    it("Renders button according to snapshot", ()=>{
        const CounterButtonWrapper = shallow(<CounterButton />); 
        expect(CounterButtonWrapper).toMatchSnapshot();
    })

    it("count increases by 1 when button is clicked", ()=>{
        const CounterButtonWrapper = shallow(<CounterButton />); 
        CounterButtonWrapper.find('button').at(0).simulate("click");
        expect(CounterButtonWrapper.state().count).toEqual(2);
    })
})