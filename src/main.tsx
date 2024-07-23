import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import Apollo from "./services/Apollo.ts";

const apollo = new Apollo()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={apollo.client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
)