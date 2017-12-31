import React, { Component } from 'react';
import { render } from "react-dom";
import App from "./containers";
import { Provider } from "react-redux";
import store from "./store";


const Layout = () => {
    return(
        <div className="app_layout">
            <App />
        </div>
    );
}

render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById("root")
);
