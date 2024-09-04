
const favoritesFromStorage = localStorage.getItem('favorites');
const initialFavorites: string[] = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];

export const favoritesReducer = (state = initialFavorites, action: { type?: string; payload?: any }) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            if (state.includes(action.payload)) {
                return state.filter(id => id !== action.payload);
            } else {
                return [...state, action.payload];
            }
        default:
            return state;
    }
};

export default favoritesReducer;