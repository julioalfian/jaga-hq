import {gql} from "@apollo/client";

export const GET_CHARACTER = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id,
            name,
            status,
            image,
            gender,
            species,
            type,
            created,
            location{
              id,
              name
            }
        }
    }`