const films = (state = [], action) => {
  switch (action.type) {
      case 'FIND_FILM':
          return state.map(film => action.payload === film.title);
      case 'LOAD_ALL_FILMS':
          return [...state, action.payload];
      case 'GET_FILMS':
          return state;
      default:
          return state;
  }
};

export default films;