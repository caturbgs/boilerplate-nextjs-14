import { RequestQuery } from '@/types';

/**
 * Convert object to query string
 * @param query query object
 * @returns query string
 */
export const convertToQueryString = (query: RequestQuery) => {
  if (Object.keys(query).length === 0) return '';

  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&');

  return `?${queryString}`;
};
