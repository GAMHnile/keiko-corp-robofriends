import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

configure({ adapter: new Adapter() });

const middlewares = [thunkMiddleware];

export const mockStore = configureStore(middlewares);
