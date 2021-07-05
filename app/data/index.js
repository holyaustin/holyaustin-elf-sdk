import { GraphQLClient } from "graphql-request"; // GraphQL request client

// Create client
const graphClient = new GraphQLClient(
   "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1-rinkeby"
);

export default graphClient;
