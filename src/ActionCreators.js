import { FETCH_FILES_START, FETCH_FILES_SUCCESS, FETCH_FILES_FAILED } from './ActionsTypes';

/**
 * @returns {ACTION_FETCH_FILES_START}
 */
export const fetchFilesStart = () => ({
  type: FETCH_FILES_START,
});

export const fetchFilesSuccess = (json) => ({
  type: FETCH_FILES_SUCCESS,
  json,
});

export const fetchFilesFailed = (error) => ({
  type: FETCH_FILES_FAILED,
  error,
});

export const searchFiles = (searchString = '') => (dispatch) => {
  dispatch({ type: FETCH_FILES_START, searchString });

  const url = new URL('http://localhost:3000/api/repos/arcadia');
  if (searchString) url.searchParams.append('search', searchString);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching files');
      } else {
        return response.json();
      }
    })
    .then((json) => dispatch(fetchFilesSuccess({ ...json, searchString })))
    .catch((err) => dispatch(fetchFilesFailed(err)));
};
