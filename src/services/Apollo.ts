import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {ENV} from "../constants/env.constant.ts";

export default class Apollo {
    private errorLink = onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors) {
            graphQLErrors.map(({message, locations, path}) => {
                alert(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            })
        }
        if (networkError) {
            alert(`[Network error]: ${networkError}`)
        }
    })

    private link = from([
        this.errorLink, new HttpLink({uri: ENV.ENDPOINT})
    ])

    public client = new ApolloClient({
        cache: new InMemoryCache(),
        link: this.link
    })
}