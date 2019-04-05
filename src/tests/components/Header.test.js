import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('should render Header component correctly', () => {
   const wrapper = shallow(<Header />);
   // expect(wrapper.find('h1').text()).toBe('Expensify');
   expect(wrapper).toMatchSnapshot();
});


//-------------------------
// Information
//-------------------------
// Enzyme will replace react-test-renderer. Below is an example code using the ReactShallowRenderer using this library for reference.
// import ReactShallowRender from 'react-test-renderer/shallow';

// test('should render Header component correctly', () => {
//    const renderer = new ReactShallowRender();
//    renderer.render(<Header />);
//    expect(renderer.getRenderOutput()).toMatchSnapshot();
//    // console.log(renderer.getRenderOutput());
// });

// Our jest.config.json file automatically runs enzyme-to-json and therefore we do not need to import nor use the toJSON() function within our code. Below is a reference of how we would have used it, if we did not have the auto enzyme-to-json configured.
// import toJSON from 'enzyme-to-json';
// test('should render Header component correctly', () => {
//    const wrapper = shallow(<Header />);
//    expect(toJSON(wrapper)).toMatchSnapshot();
// });