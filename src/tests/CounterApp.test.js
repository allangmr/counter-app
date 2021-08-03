import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'


describe('Test of CounterApp.js', () => {
    let wrapper = shallow(<CounterApp  />);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp  />);
    });


    test('should be show <CounterApp />', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should be show <CounterApp /> with default value', () => {
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('should be show default value 100 and use wrapper.find', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor} />);
        const defValue = wrapper.find('h2').text().trim();
        expect(valor).toBe(Number(defValue));
    })

    test('should be increment counter -1', () => {
        wrapper.find('button').at(1).simulate('click');
        const defValue = wrapper.find('h2').text().trim();

        expect(defValue).toBe('9');
    })

    test('should be dicrement counter +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const defValue = wrapper.find('h2').text().trim();

        expect(defValue).toBe('11');
    })

    test('should be reset counter', () => {
        const wrapper = shallow(<CounterApp value={500} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const defValue = wrapper.find('h2').text().trim();

        expect(defValue).toBe('500');
    })

    
    
    
});