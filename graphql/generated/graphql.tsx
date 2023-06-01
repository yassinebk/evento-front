import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateEventGenreInput = {
  /** code name */
  codeName: Scalars['String']['input'];
  /** description */
  description: Scalars['String']['input'];
  /** display name */
  displayName: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** email */
  email: Scalars['String']['input'];
  /** first name */
  firstName: Scalars['String']['input'];
  /** last name */
  lastName: Scalars['String']['input'];
  /** password */
  password: Scalars['String']['input'];
  /** phone number */
  phoneNumber: Scalars['String']['input'];
  /** state */
  state: Scalars['String']['input'];
  /** town */
  town: Scalars['String']['input'];
};

export type EventGenre = {
  __typename?: 'EventGenre';
  /** code name */
  codeName: Scalars['String']['output'];
  /** created at */
  createdAt: Scalars['DateTime']['output'];
  /** deleted at */
  deletedAt: Scalars['DateTime']['output'];
  /** description */
  description: Scalars['String']['output'];
  /** display name */
  displayName: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
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
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRemoveEventGenreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
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
  __typename?: 'Query';
  eventGenre: EventGenre;
  eventGenres: Array<EventGenre>;
  hello: Scalars['String']['output'];
  user: User;
  users: Array<User>;
  whoAmI: User;
};


export type QueryEventGenreArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateEventGenreInput = {
  /** code name */
  codeName?: InputMaybe<Scalars['String']['input']>;
  /** description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** display name */
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** state */
  state?: InputMaybe<Scalars['String']['input']>;
  /** town */
  town?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** created at */
  createdAt: Scalars['DateTime']['output'];
  /** deleted at */
  deletedAt: Scalars['DateTime']['output'];
  /** email */
  email: Scalars['String']['output'];
  /** first name */
  firstName: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** last name */
  lastName: Scalars['String']['output'];
  /** password */
  password: Scalars['String']['output'];
  /** phone number */
  phoneNumber: Scalars['String']['output'];
  /** role */
  role: Scalars['String']['output'];
  /** state */
  state: Scalars['String']['output'];
  /** town */
  town: Scalars['String']['output'];
  /** updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type CreateEventGenreMutationVariables = Exact<{
  createEventGenre: CreateEventGenreInput;
}>;


export type CreateEventGenreMutation = { __typename?: 'Mutation', createEventGenre: { __typename?: 'EventGenre', description: string, displayName: string, codeName: string } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, email: string, phoneNumber: string, role: string, town: string, state: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserLoginResponse', access_token: string, user: { __typename?: 'User', id: number, firstName: string, email: string } } };

export type RemoveEventGenreMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveEventGenreMutation = { __typename?: 'Mutation', removeEventGenre: { __typename?: 'EventGenre', description: string, displayName: string, codeName: string } };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: number, email: string, phoneNumber: string, role: string, town: string, state: string } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  town: Scalars['String']['input'];
  state: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', email: string, id: number, firstName: string, lastName: string, phoneNumber: string, town: string, state: string } };

export type UpdateEventGenreMutationVariables = Exact<{
  updateEventGenre: UpdateEventGenreInput;
}>;


export type UpdateEventGenreMutation = { __typename?: 'Mutation', updateEventGenre: { __typename?: 'EventGenre', description: string, displayName: string, codeName: string } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, email: string, phoneNumber: string, role: string, town: string, state: string } };

export type EventGenreQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type EventGenreQuery = { __typename?: 'Query', eventGenre: { __typename?: 'EventGenre', codeName: string, id: number, displayName: string, description: string } };

export type EventGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type EventGenresQuery = { __typename?: 'Query', eventGenres: Array<{ __typename?: 'EventGenre', codeName: string, description: string, displayName: string }> };

export type WhoAmiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmiQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string, phoneNumber: string, role: string, town: string } };


export const CreateEventGenreDocument = gql`
    mutation CreateEventGenre($createEventGenre: CreateEventGenreInput!) {
  createEventGenre(createEventGenreInput: $createEventGenre) {
    description
    displayName
    codeName
  }
}
    `;
export type CreateEventGenreMutationFn = Apollo.MutationFunction<CreateEventGenreMutation, CreateEventGenreMutationVariables>;

/**
 * __useCreateEventGenreMutation__
 *
 * To run a mutation, you first call `useCreateEventGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventGenreMutation, { data, loading, error }] = useCreateEventGenreMutation({
 *   variables: {
 *      createEventGenre: // value for 'createEventGenre'
 *   },
 * });
 */
export function useCreateEventGenreMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventGenreMutation, CreateEventGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventGenreMutation, CreateEventGenreMutationVariables>(CreateEventGenreDocument, options);
      }
export type CreateEventGenreMutationHookResult = ReturnType<typeof useCreateEventGenreMutation>;
export type CreateEventGenreMutationResult = Apollo.MutationResult<CreateEventGenreMutation>;
export type CreateEventGenreMutationOptions = Apollo.BaseMutationOptions<CreateEventGenreMutation, CreateEventGenreMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    email
    phoneNumber
    role
    town
    state
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RemoveEventGenreDocument = gql`
    mutation RemoveEventGenre($id: Int!) {
  removeEventGenre(id: $id) {
    description
    displayName
    codeName
  }
}
    `;
export type RemoveEventGenreMutationFn = Apollo.MutationFunction<RemoveEventGenreMutation, RemoveEventGenreMutationVariables>;

/**
 * __useRemoveEventGenreMutation__
 *
 * To run a mutation, you first call `useRemoveEventGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEventGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEventGenreMutation, { data, loading, error }] = useRemoveEventGenreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEventGenreMutation(baseOptions?: Apollo.MutationHookOptions<RemoveEventGenreMutation, RemoveEventGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveEventGenreMutation, RemoveEventGenreMutationVariables>(RemoveEventGenreDocument, options);
      }
export type RemoveEventGenreMutationHookResult = ReturnType<typeof useRemoveEventGenreMutation>;
export type RemoveEventGenreMutationResult = Apollo.MutationResult<RemoveEventGenreMutation>;
export type RemoveEventGenreMutationOptions = Apollo.BaseMutationOptions<RemoveEventGenreMutation, RemoveEventGenreMutationVariables>;
export const RemoveUserDocument = gql`
    mutation RemoveUser($id: Int!) {
  removeUser(id: $id) {
    id
    email
    phoneNumber
    role
    town
    state
  }
}
    `;
export type RemoveUserMutationFn = Apollo.MutationFunction<RemoveUserMutation, RemoveUserMutationVariables>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserMutation, RemoveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
      }
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!, $phoneNumber: String!, $town: String!, $state: String!) {
  signup(
    user: {email: $email, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, password: $password, town: $town, state: $state}
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
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

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
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateEventGenreDocument = gql`
    mutation UpdateEventGenre($updateEventGenre: UpdateEventGenreInput!) {
  updateEventGenre(updateEventGenreInput: $updateEventGenre) {
    description
    displayName
    codeName
  }
}
    `;
export type UpdateEventGenreMutationFn = Apollo.MutationFunction<UpdateEventGenreMutation, UpdateEventGenreMutationVariables>;

/**
 * __useUpdateEventGenreMutation__
 *
 * To run a mutation, you first call `useUpdateEventGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventGenreMutation, { data, loading, error }] = useUpdateEventGenreMutation({
 *   variables: {
 *      updateEventGenre: // value for 'updateEventGenre'
 *   },
 * });
 */
export function useUpdateEventGenreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventGenreMutation, UpdateEventGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventGenreMutation, UpdateEventGenreMutationVariables>(UpdateEventGenreDocument, options);
      }
export type UpdateEventGenreMutationHookResult = ReturnType<typeof useUpdateEventGenreMutation>;
export type UpdateEventGenreMutationResult = Apollo.MutationResult<UpdateEventGenreMutation>;
export type UpdateEventGenreMutationOptions = Apollo.BaseMutationOptions<UpdateEventGenreMutation, UpdateEventGenreMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    id
    email
    phoneNumber
    role
    town
    state
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const EventGenreDocument = gql`
    query EventGenre($id: Int!) {
  eventGenre(id: $id) {
    codeName
    id
    displayName
    description
    displayName
  }
}
    `;

/**
 * __useEventGenreQuery__
 *
 * To run a query within a React component, call `useEventGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventGenreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventGenreQuery(baseOptions: Apollo.QueryHookOptions<EventGenreQuery, EventGenreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventGenreQuery, EventGenreQueryVariables>(EventGenreDocument, options);
      }
export function useEventGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventGenreQuery, EventGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventGenreQuery, EventGenreQueryVariables>(EventGenreDocument, options);
        }
export type EventGenreQueryHookResult = ReturnType<typeof useEventGenreQuery>;
export type EventGenreLazyQueryHookResult = ReturnType<typeof useEventGenreLazyQuery>;
export type EventGenreQueryResult = Apollo.QueryResult<EventGenreQuery, EventGenreQueryVariables>;
export const EventGenresDocument = gql`
    query EventGenres {
  eventGenres {
    codeName
    codeName
    description
    displayName
  }
}
    `;

/**
 * __useEventGenresQuery__
 *
 * To run a query within a React component, call `useEventGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventGenresQuery(baseOptions?: Apollo.QueryHookOptions<EventGenresQuery, EventGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventGenresQuery, EventGenresQueryVariables>(EventGenresDocument, options);
      }
export function useEventGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventGenresQuery, EventGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventGenresQuery, EventGenresQueryVariables>(EventGenresDocument, options);
        }
export type EventGenresQueryHookResult = ReturnType<typeof useEventGenresQuery>;
export type EventGenresLazyQueryHookResult = ReturnType<typeof useEventGenresLazyQuery>;
export type EventGenresQueryResult = Apollo.QueryResult<EventGenresQuery, EventGenresQueryVariables>;
export const WhoAmiDocument = gql`
    query WhoAmi {
  whoAmI {
    id
    firstName
    lastName
    email
    phoneNumber
    role
    town
    town
  }
}
    `;

/**
 * __useWhoAmiQuery__
 *
 * To run a query within a React component, call `useWhoAmiQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmiQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmiQuery(baseOptions?: Apollo.QueryHookOptions<WhoAmiQuery, WhoAmiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoAmiQuery, WhoAmiQueryVariables>(WhoAmiDocument, options);
      }
export function useWhoAmiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoAmiQuery, WhoAmiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoAmiQuery, WhoAmiQueryVariables>(WhoAmiDocument, options);
        }
export type WhoAmiQueryHookResult = ReturnType<typeof useWhoAmiQuery>;
export type WhoAmiLazyQueryHookResult = ReturnType<typeof useWhoAmiLazyQuery>;
export type WhoAmiQueryResult = Apollo.QueryResult<WhoAmiQuery, WhoAmiQueryVariables>;