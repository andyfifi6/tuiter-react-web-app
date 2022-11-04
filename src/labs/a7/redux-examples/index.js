import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducers/hello";               // import the new reducer
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";          //instead of createStore,
import { configureStore }                   //import the configureStore function
    from '@reduxjs/toolkit';
import Todos from "./todos-component";      // import new component to render todos
const store = configureStore({      //  combine all reducers into a single store
    reducer: {hello, todos}                //  each available through these namespaces
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;