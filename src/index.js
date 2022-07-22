import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component { //borrowing functionality from react.component to App
  
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude}),
        (err) => this.setState({ errorMessage: err.message})
        );

}    
    //render is a method and constructor is a function
    //functions have arguments
    //React says we have to define render 

    renderContent() {
         if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage)
        {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
         if(!this.state.errorMessage && !this.state.lat){
         return <Loading message='Please Accept Location Request' />;
         }
    }
    render() {
       return <div className="border red">{this.renderContent()}</div>
    };
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")//querySelector("#root")
);