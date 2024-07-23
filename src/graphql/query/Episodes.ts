import {gql} from "@apollo/client";

export const GET_EPISODES = gql`
    query Episodes($name: String, $page: Int) {
        episodes(page: $page, filter: {name: $name}) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                }
            }
        }
    }`
