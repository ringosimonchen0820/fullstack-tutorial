const { gql } = require('apollo-server');

const typeDefs = gql`
    # Schema will go here

    type Launch {
        id: ID!
        site: String
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    type User {
        id:ID!
        email: String!
        trips: [Launch]!
    }

    enum PatchSize {
        SMALL
        LARGE
    }

    type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
        currentUser: User
    }

    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        
        # login token
        login(email: String): String 
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }    

`;

module.exports = typeDefs;