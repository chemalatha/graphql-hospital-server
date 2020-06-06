import {gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query{
        hello :String!
    }
    type Medicine{
        id:ID!
        name:String!
        company:String!
        cost:String!
        quantity:Int
        manufactureDate:String!
        expiryDate:String!
        medicinetype:String
    }
    type Vital{
        id:ID!
        bp:String   
        sugar:String
        weight:String
        diagnosis:String!
    }
    type Mutation{
        createMedicine(
            name:String!,
            company:String!,
            cost:String!,
            quantity:Int,
            manufactureDate:String!,
            expiryDate:String!,
            medicinetype:String): Medicine!
        createVital(
            bp:String,   
            sugar:String, 
            weight:String,
            diagnosis:String!
        ):Vital!
    }
    
`;