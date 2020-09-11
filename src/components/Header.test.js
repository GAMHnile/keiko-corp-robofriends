import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component tests', ()=>{
    it('renders Header component', ()=>{
        const HeaderWrapper = shallow(<Header />);
        expect(HeaderWrapper).toMatchSnapshot()
    })
})