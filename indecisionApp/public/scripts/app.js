const template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
);


const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);