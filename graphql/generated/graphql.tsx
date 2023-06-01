import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string | number; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
};

export type CreateEventGenreInput = {
	/** code name */
	codeName: Scalars["String"]["input"];
	/** description */
	description: Scalars["String"]["input"];
	/** display name */
	displayName: Scalars["String"]["input"];
};

export type CreateUserInput = {
	/** email */
	email: Scalars["String"]["input"];
	/** first name */
	firstName: Scalars["String"]["input"];
	/** last name */
	lastName: Scalars["String"]["input"];
	/** password */
	password: Scalars["String"]["input"];
	/** phone number */
	phoneNumber: Scalars["String"]["input"];
	/** state */
	state: Scalars["String"]["input"];
	/** town */
	town: Scalars["String"]["input"];
};

export type EventGenre = {
	__typename?: "EventGenre";
	/** code name */
	codeName: Scalars["String"]["output"];
	/** created at */
	createdAt: Scalars["DateTime"]["output"];
	/** deleted at */
	deletedAt: Scalars["DateTime"]["output"];
	/** description */
	description: Scalars["String"]["output"];
	/** display name */
	displayName: Scalars["String"]["output"];
	/** id */
	id: Scalars["Int"]["output"];
	/** updated at */
	updatedAt: Scalars["DateTime"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	createEventGenre: EventGenre;
	createUser: User;
	login: UserLoginResponse;
	removeEventGenre: EventGenre;
	removeUser: User;
	signup: User;
	updateEventGenre: EventGenre;
	updateUser: User;
};

export type MutationCreateEventGenreArgs = {
	createEventGenreInput: CreateEventGenreInput;
};

export type MutationCreateUserArgs = {
	createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
	email: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
};

export type MutationRemoveEventGenreArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationRemoveUserArgs = {
	id: Scalars["Int"]["input"];
};

export type MutationSignupArgs = {
	user: CreateUserInput;
};

export type MutationUpdateEventGenreArgs = {
	updateEventGenreInput: UpdateEventGenreInput;
};

export type MutationUpdateUserArgs = {
	updateUserInput: UpdateUserInput;
};

export type Query = {
	__typename?: "Query";
	eventGenre: EventGenre;
	eventGenres: Array<EventGenre>;
	hello: Scalars["String"]["output"];
	user: User;
	users: Array<User>;
	whoAmI: User;
};

export type QueryEventGenreArgs = {
	id: Scalars["Int"]["input"];
};

export type QueryUserArgs = {
	id: Scalars["Int"]["input"];
};

export type UpdateEventGenreInput = {
	/** code name */
	codeName?: InputMaybe<Scalars["String"]["input"]>;
	/** description */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** display name */
	displayName?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
};

export type UpdateUserInput = {
	/** email */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** first name */
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
	/** last name */
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	/** password */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** phone number */
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	/** state */
	state?: InputMaybe<Scalars["String"]["input"]>;
	/** town */
	town?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
	__typename?: "User";
	/** created at */
	createdAt: Scalars["DateTime"]["output"];
	/** deleted at */
	deletedAt: Scalars["DateTime"]["output"];
	/** email */
	email: Scalars["String"]["output"];
	/** first name */
	firstName: Scalars["String"]["output"];
	/** id */
	id: Scalars["Int"]["output"];
	/** last name */
	lastName: Scalars["String"]["output"];
	/** password */
	password: Scalars["String"]["output"];
	/** phone number */
	phoneNumber: Scalars["String"]["output"];
	/** role */
	role: Scalars["String"]["output"];
	/** state */
	state: Scalars["String"]["output"];
	/** town */
	town: Scalars["String"]["output"];
	/** updated at */
	updatedAt: Scalars["DateTime"]["output"];
};

export type UserLoginResponse = {
	__typename?: "UserLoginResponse";
	access_token: Scalars["String"]["output"];
	user: User;
};

export type LoginMutationVariables = Exact<{
	email: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
	__typename?: "Mutation";
	login: {
		__typename?: "UserLoginResponse";
		access_token: string;
		user: { __typename?: "User"; id: number; firstName: string; email: string };
	};
};

export type SignUpMutationVariables = Exact<{
	email: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	firstName: Scalars["String"]["input"];
	lastName: Scalars["String"]["input"];
	phoneNumber: Scalars["String"]["input"];
	town: Scalars["String"]["input"];
	state: Scalars["String"]["input"];
}>;

export type SignUpMutation = {
	__typename?: "Mutation";
	signup: {
		__typename?: "User";
		email: string;
		id: number;
		firstName: string;
		lastName: string;
		phoneNumber: string;
		town: string;
		state: string;
	};
};

export const LoginDocument = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			access_token
			user {
				id
				firstName
				email
			}
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LoginMutation,
		LoginMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
		LoginDocument,
		options
	);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
export const SignUpDocument = gql`
	mutation SignUp(
		$email: String!
		$password: String!
		$firstName: String!
		$lastName: String!
		$phoneNumber: String!
		$town: String!
		$state: String!
	) {
		signup(
			user: {
				email: $email
				firstName: $firstName
				lastName: $lastName
				phoneNumber: $phoneNumber
				password: $password
				town: $town
				state: $state
			}
		) {
			email
			id
			firstName
			lastName
			phoneNumber
			town
			state
		}
	}
`;
export type SignUpMutationFn = Apollo.MutationFunction<
	SignUpMutation,
	SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phoneNumber: // value for 'phoneNumber'
 *      town: // value for 'town'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useSignUpMutation(
	baseOptions?: Apollo.MutationHookOptions<
		SignUpMutation,
		SignUpMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
		SignUpDocument,
		options
	);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
	SignUpMutation,
	SignUpMutationVariables
>;
