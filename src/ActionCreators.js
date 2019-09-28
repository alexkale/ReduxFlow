import { UPDATE_FILE_SEARCH_STRING, FETCH_FILES_START } from './ActionsTypes';

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

export const updateShownFiles = (searchString) => (dispatch) => {
  dispatch({ type: FETCH_FILES_START });
  setTimeout(dispatch, 500, updateFileSearchString(searchString));
};
