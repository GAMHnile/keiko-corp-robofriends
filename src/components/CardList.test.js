import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme';

describe('CardList component tests', ()=>{
    it('renders cardList component', ()=>{
        const mockRobots = [
            {
                id: 1,
                name: "John snow",
                email: "john@SpeechGrammarList.com"
            },
            {
                id: 2,
                name: "jane snow",
                email: "jane@SpeechGrammarList.com"
            },
            {
                id: 3,
                name: "Chris snow",
                email: "chris@SpeechGrammarList.com"
            },
        ]
        const CardListWrapper = shallow(<CardList robots={mockRobots} />);
        expect(CardListWrapper).toMatchSnapshot()
    })
})