import React from 'react';
import ReactDOM from 'react-dom/client';


export default function HelloReact() {
    return (
        <h1>Hello React!</h1>
    );
}

/*if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}*/

//https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
const container = ReactDOM.createRoot(document.getElementById('hello-react'));
if (container) {
	container.render(
		<React.StrictMode><HelloReact /></React.StrictMode>);
}

/*const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  //https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
const container = ReactDOM.createRoot(document.getElementById('user'));
if (container) {
	container.render(
		<React.StrictMode><user /></React.StrictMode>);
}*/
