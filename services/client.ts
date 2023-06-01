import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache
} from "@apollo/client";

import { findToken } from "@utils/auth";
const httpLink = new HttpLink({
	uri: "https://22a3-41-225-181-101.ngrok-free.app/graphql"
});

const authLink = new ApolloLink((operation, forward) => {
	operation.setContext(async (req: any, props: any) => {
		console.log(req);
		const token = findToken();
		return {
			...(props ? props.headers : {}),
			authorization: token ? `Bearer ${token}` : ""
		};
	});

	// Call the next link in the middleware chain.
	return forward(operation);
});

const client = new ApolloClient({
	link: authLink.concat(httpLink), // Chain it with the HttpLink
	cache: new InMemoryCache()
});

export default client;
