export const ituneReducer = (state, action) => {
  switch (action.type) {
    case "SET_SONGS":
      return {
        ...state,
        songs: [...action.payload],
      };

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: [...action.payload],
      };

    case "SET_RELEASE_DATES":
      return {
        ...state,
        releaseDates: [...action.payload],
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (c) =>
            c.id.attributes["im:id"] !== action.payload.id.attributes["im:id"]
        ),
      };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };

    case "FILTER_BY_CATEGORY":
      return { ...state, filterByCategory: action.payload };

    case "FILTER_BY_RELEASE_DATES":
      return { ...state, filterByReleaseDates: action.payload };

    default:
      return state;
  }
};
