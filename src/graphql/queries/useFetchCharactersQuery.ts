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
  nextPage: number | null;
  getCharacters: (payload: { variables: { page: number } }) => any;
  fetchMoreCharacters: (page: number) => any;
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

export const mergeCharacter = (existing: any = [], incoming: any) => {
  let existingResults: any[] = [];
  if (existing && existing.results) {
    existingResults = existing.results;
  }

  if (existing?.info?.next === incoming?.info?.next) {
    return existing;
  }

  return {
    info: incoming?.info,
    results: [...existingResults, ...incoming?.results],
  };
};

export function useFetchCharactersQuery(): IQuery {
  const [getCharacters, { loading, data, fetchMore }] =
    useLazyQuery<FetchCharactersQueryResponse>(FETCH_CHARACTERS);

  const prevPage = data?.characters?.info?.prev;
  const currentPage = prevPage && prevPage != null ? prevPage + 1 : 1;
  const nextPage = data?.characters.info?.next || null;

  const fetchMoreCharacters = (page: number) => {
    fetchMore({ variables: { page: page } });
  };

  return {
    characters: data?.characters?.results,
    loading: loading,
    count: data?.characters.results?.length || 0,
    totalCount: data?.characters.info?.count || 0,
    currentPage: currentPage,
    nextPage: nextPage,
    getCharacters,
    fetchMoreCharacters,
  };
}
