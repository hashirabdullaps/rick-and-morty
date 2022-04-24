import { gql, useLazyQuery } from "@apollo/client";
import ICharacter from "../../types/ICharacter";

export interface FetchCharactersQueryResponse {
  characters: {
    results: ICharacter[];
    info: {
      count: number;
      pages: number;
      prev: number | null;
      next: number | null;
    };
  };
}

interface IQuery {
  characters: ICharacter[] | undefined;
  loading: boolean;
  count: number;
  totalCount: number;
  currentPage: number;
  getCharacters: (payload: { variables: { page: number } }) => any;
}

export const FETCH_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }

      results {
        id
        name
        image
        status
        location {
          name
        }
      }
    }
  }
`;

export function useFetchCharactersQuery(): IQuery {
  const [getCharacters, { loading, data }] =
    useLazyQuery<FetchCharactersQueryResponse>(FETCH_CHARACTERS);

  const prevPage = data?.characters?.info?.prev;
  const currentPage = prevPage && prevPage != null ? prevPage + 1 : 1;

  return {
    characters: data?.characters?.results,
    loading: loading,
    count: data?.characters.results?.length || 0,
    totalCount: data?.characters.info?.count || 0,
    currentPage: currentPage,
    getCharacters,
  };
}
