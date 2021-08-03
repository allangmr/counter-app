import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
describe('Test in PrimerApp.js', () => {
    // test('should be show the message Hello...', () => {
    //     //Arrange
    //     const saludo = 'Hola Soy Allan';
    //     //Act
    //     const { getByText } = render(<PrimeraApp saludos={saludo}/>)
    //     //Assert
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    //Compara 2 string el que se creo al momento del primer snapshot y el actual.
    test('should be show <PrimeraApp /> ', () => {
        const saludo = 'Hola Soy Allan';
        const wrapper = shallow(<PrimeraApp saludos={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })
    //compara el props y el resultado del envio del props al componente 
    test('should be show the subtitle send by props', () => {
        const saludo = 'Hola Soy Allan';
        const subtitulo = 'No tenemos subtitulos';
        const wrapper = shallow(<PrimeraApp 
            saludos={saludo} 
            subtitulo={subtitulo}
            />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })
    
    
    
});