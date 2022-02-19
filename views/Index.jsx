const React = require('react')

class Index extends React.Component {
    render(){
        const pokemon=this.props.pokemon   
        return (
            <div>
                <h1>See all The Pokemon!</h1>
                <nav>
                    <a href='/pokemon'>Go to the new Page</a>
                </nav>
                
                
            </div>
        )
    }
}

module.exports=Index;

