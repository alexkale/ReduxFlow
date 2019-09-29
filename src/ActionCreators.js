import { UPDATE_FILE_SEARCH_STRING, FETCH_FILES_START, FETCH_FILES_SUCCESS, FETCH_FILES_FAILED } from './ActionsTypes';

/**
 * @param {string} searchString
 * @returns {ACTION_UPDATE_FILE_SEARCH_STRING}
 */
export const updateFileSearchString = (searchString) => ({
  type: UPDATE_FILE_SEARCH_STRING,
  searchString,
});

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

export const searchFiles = (searchString) => (dispatch) => {
  dispatch({ type: FETCH_FILES_START });

  const url = new URL('http://localhost:3000');
  url.searchParams.append({ searchString });

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
