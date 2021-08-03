import PropTypes from 'prop-types'
const PrimeraApp = ( {saludos,subtitulo} ) => {

    // Mala forma de validar que venga la variable
    // if(!saludos){
    //     throw new Error("The saludos is neccesary.")
    // }

    return (
        <>
            <h1>{saludos}</h1>
            {/* <pre>{JSON.stringify(saludo, null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;
