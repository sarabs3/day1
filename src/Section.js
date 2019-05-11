import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
// const Section = (props) => (
//     <div className={props.className} >
//     <p>Name: {props.name}</p>
//     <p>contact: {props.contactNumber}</p>
//     <p>address: {props.address}</p>
//     </div>
// );

// const Section = (props) => {
//     switch(props.page) {
//         case 'Home':
//             return <Home />
//         case 'About' :
//             return <About />
//         default:
//             return <Contact />
//     }
// }


const Section = (props) => {
    if(props.page === 'Home') {
        return <Home />
    } else if(props.page === 'About') {
        return <About />
    } else {
        return <Contact />
    }
}

export default Section;
