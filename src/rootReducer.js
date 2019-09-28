import { cloneDeep } from 'lodash';

import { UPDATE_FILE_SEARCH_STRING } from "./ActionsTypes";

// TO-DO: Move to file

const defaultState = {
  files: [
    {
      id: 0,
      name: 'api',
      type: 'folder',
      commit: 'd53dsv',
    },
    {
      id: 1,
      name: 'ci',
      type: 'folder',
      commit: 'c53dsv',
    },
    {
      id: 2,
      name: 'contrib',
      type: 'folder',
      commit: 's53dsv',
    },
    {
      id: 3,
      name: 'http',
      type: 'folder',
      commit: 'h5jdsv',
    },
    {
      id: 4,
      name: 'lib',
      type: 'folder',
      commit: 'f5jdsv',
    },
    {
      id: 5,
      name: 'local',
      type: 'folder',
      commit: 'k5jdsv',
    },
    {
      id: 6,
      name: 'packages',
      type: 'folder',
      commit: 'a5jdsv',
    },
    {
      id: 7,
      name: 'robots',
      type: 'folder',
      commit: 'l5jdsv',
    },
    {
      id: 8,
      name: 'server',
      type: 'folder',
      commit: 'j5jdsv',
    },
    {
      id: 9,
      name: 'ut',
      type: 'folder',
      commit: '5jdsvk',
    },
    {
      id: 10,
      name: 'README.md',
      type: 'text',
      commit: 'h5jdsl',
    },
    {
      id: 11,
      name: 'ya.make',
      type: 'code',
      commit: 'k5jdsv',
    },
  ],
  commits: {
    d53dsv: {
      hash: 'd53dsv',
      message: '[vcs] move http to arc',
      author: 'noxoomo',
      time: '4 s ago',
    },
    c53dsv: {
      hash: 'c53dsv',
      message: '[vcs] test for empty commit message',
      author: 'nikitxskv',
      time: '1 min ago',
    },
    s53dsv: {
      hash: 's53dsv',
      message: '[vcs] change owner to g:arc',
      author: 'nalpp',
      time: '16:25',
    },
    h5jdsv: {
      hash: 'h5jdsv',
      message: '[vcs] move http to arc',
      author: 'somov',
      time: 'Yesterday, 14:50',
    },
    f5jdsv: {
      hash: 'f5jdsv',
      message: 'ARCADIA-771: append /trunk/arcadia/',
      author: 'deshevoy',
      time: 'Jan 11, 12:01',
    },
    k5jdsv: {
      hash: 'k5jdsv',
      message: '[vcs] move http to arc',
      author: 'mvel',
      time: 'Dec 29, 2017',
    },
    a5jdsv: {
      hash: 'a5jdsv',
      message: '[vcs] VCS-803: packages for services',
      author: 'levanov',
      time: 'Jan 1, 12:01',
    },
    l5jdsv: {
      hash: 'l5jdsv',
      message: 'ARCADIA-771: convert string to json object',
      author: 'torkve',
      time: 'Dec 29, 2017',
    },
    j5jdsv: {
      hash: 'j5jdsv',
      message: '[vcs] get list of refs',
      author: 'spreis',
      time: 'Dec 29, 2017',
    },
    '5jdsvk': {
      hash: '5jdsvk',
      message: '[vsc] store merge conflicts',
      author: 'annaveronika',
      time: 'Dec 29, 2017',
    },
    h5jdsl: {
      hash: 'h5jdsl',
      message: '[vcs] add readme',
      author: 'pg',
      time: 'Dec 29, 2017',
    },
  },
  shownFiles: Array.from(Array(12).keys()),
  searchString: '',
};

// TO-DO: combineReducers()

const rootReducer = (action, state = defaultState) => {
  switch (action.type) {
    case '@@init':
      return defaultState;
    case UPDATE_FILE_SEARCH_STRING: {
      const newState = cloneDeep(state);
      const shownFiles = state.files
        .filter((file) => file.name.startsWith(action.searchString))
        .map((file) => file.id);
      return { ...newState, shownFiles, searchString: action.searchString };
    }
    default:
      return state;
  }
};

export default rootReducer;
