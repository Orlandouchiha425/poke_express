const React = require('react');

class Show extends React.Component {
    render(){
        const pokemon= this.props.pokemon
        return (
            <div>

                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name}</h2>
                <a href="/pokemon">Go Back to the Index</a>
                <img src={`${pokemon.img}.jpg`}></img>
                <a href='/'>This will take you back to Index</a>
               
            
            </div>
        );  
    }
}


module.exports = Show;




