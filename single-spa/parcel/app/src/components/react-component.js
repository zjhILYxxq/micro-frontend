import React from 'react';
import ReactDOM from 'react-dom';

const ReactComponent = (props) => {
    return React.createElement("div", null, `react component: ${props.val}`);
}

export default ReactComponent;

export function bootstrap() {
    return Promise.resolve().then(() => {
        console.log('bootstrap');
    })
}

export function mount(props) {
    return Promise.resolve().then(() => {
        console.log('mount');
        ReactDOM.render(ReactComponent(props), props.domElement);
    });
}

export function unmount(props) {
    return Promise.resolve().then(() => {
        console.log('unmount');
        ReactDOM.unmountComponentAtNode(props.domElement);
    })
}

export function update(props) {
    return Promise.resolve().then(() => {
        console.log('update');
        ReactDOM.render(ReactComponent(props), props.domElement);
    })
}



