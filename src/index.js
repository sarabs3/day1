import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Section from './Section';

// var a = function() {
//     return <h1>Hello World 2!</h1>
// }

// class based components
// component Local State
class AboutUsComponent extends React.Component{
    state = {
        load: false,
        name: 'sarab',
        page: 'About', // home, about, contact
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({load: true})
        // }, 3000);
    }
    render = () => {
        return (
            <div>
            <Loading name="Sarab" />
            <Loading name="Sam" />
            <Loading name="John" />
            <Loading name="Sham" />
            </div>
            )
        return <Section page={this.state.page} />;
        return <Section name={this.state.name} className="error" address="ABC" contactNumber="123" />;
        return <MyComponent name={this.state.name} loadingState={this.state.load} className="" id="" />;
        // if (this.state.load) {
        //     return (
        //         <MyComponent />
        //     )
        // } else {
        //     return <Loading />
        // }
    }
}

// functional comonent
const MyComponent = (props) => {
    if (props.loadingState) {
        return (
            <div className={props.className} >
                <h1>{props.name}</h1>
                <p>My Info</p>
            </div>
            )
    } else {
        return <Loading />
    }
}

const Loading = (props) => (
    <p>{props.name}</p>
);

ReactDOM.render(<AboutUsComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
