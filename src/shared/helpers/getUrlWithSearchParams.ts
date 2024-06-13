import queryString, { StringifyOptions } from "query-string";

export const getUrlWithSearchParams = (
  baseUrl: string,
  queryParamsProps?: queryString.StringifiableRecord,
  options?: StringifyOptions,
) => {
  return queryString.stringifyUrl(
    { url: baseUrl, query: queryParamsProps },
    { skipEmptyString: true, skipNull: true, ...options },
  );
};
