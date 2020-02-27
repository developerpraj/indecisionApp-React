console.log('App.js is running');


//JSX -JavaScript XML;

//var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "p", 
    {id:"someid"} ,
    "This is JSX from app.js" 
    );
var appRoot= document.getElementById('app');
//rendering the variable in console
ReactDOM.render(template,appRoot);