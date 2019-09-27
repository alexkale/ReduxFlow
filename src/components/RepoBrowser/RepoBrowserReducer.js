const defaultState = {
  count: 0,
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
    }
  },
  shownFiles: [0, 1],
};

const repoBrowserReducer = (action, state = defaultState) => {
  console.log('repoBrowserReducer called for action', action);

  switch (action) {
    case '@@init':
      return defaultState;
    default:
      return state;
  }
};

export default repoBrowserReducer;
