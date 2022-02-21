const React = require('react')

class Index extends React.Component {
    render(){
        const pokemon=this.props.pokemon   
        return (
            <div style={myStyle}>
                <h1>See all The Pokemon!</h1>
                <nav>
                    <a href='/'>Go to the home page</a>
                </nav>
                <ul>
                {
                    pokemon.map((pokeball,i) => {
                        return (
                            <li key={i}><a href={`/pokemon/${i}`}>{capitalizeFirstCharacter(pokeball.name)}</a></li>
                        )
                    })
                }
                </ul> 
                
                
            </div>
        )
    }

}

const capitalizeFirstCharacter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
}

module.exports=Index;

const myStyle = {
    color: '#ffffff',
    backgroundColor: 'grey',
    };
    
    // class MyFirstComponent extends React.Component() {
    // return (
    //   <div style={myStyle}>My First React Component!</div>;
    // }
    // }