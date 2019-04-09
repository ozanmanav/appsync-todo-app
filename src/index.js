import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Client from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import AppSync from "./AppSync";

const client = new Client({
  url: AppSync.aws_appsync_graphqlEndpoint,
  region: AppSync.aws_appsync_region,
  auth: {
    type: AppSync.aws_appsync_authenticationType,
    apiKey: AppSync.aws_appsync_apiKey
  }
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

ReactDOM.render(<WithProvider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
