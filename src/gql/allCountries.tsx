import gql from 'graphql-tag'

export const ALL_COUNTRIES = gql`
  query allCharacters {
    countries: Country {
      _id
      name
    }
  }
`
