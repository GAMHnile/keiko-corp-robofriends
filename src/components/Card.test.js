import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card component tests', ()=>{
    it('renders card component', ()=>{
        const CardWrapper = shallow(<Card />);
        expect(CardWrapper).toMatchSnapshot()
    })
})

