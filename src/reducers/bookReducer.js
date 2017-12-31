const initialState = {
    books :[{
        id : 1,
        title : "Book 1",
        description : "some default description",
        price : 150
    },
    {
        id : 2,
        title : "Book 2",
        description : "some default description",
        price : 150
    },
    {
        id : 3,
        title : "Book 3",
        description : "some default description",
        price : 150
    }],
    categories:[]
};
const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_ALL_BOOKS":
            return state = {
                ...state,
                books : [...state.books]
            };
            break;


        case "ADD_NEW_BOOK":
            return state = {
                ...state,
                books : [...state.books, ...action.payload] 
            }
            break;

        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];

            const indexToDelete = currentBookToDelete.findIndex(book => (book.id === action.payload.id));
            return state = {
                ...state,
                books : [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete+1)]
            };
            break;

        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books]; 

            const indexToUpdate = currentBookToUpdate.findIndex(book => (book.id === action.payload.id));
            const newUpdatedBook = {
                ...currentBookToUpdate[indexToUpdate],
                title : action.payload.name
            }
            return state = {
                ...state,
                books : [...currentBookToUpdate.slice(0, indexToUpdate), newUpdatedBook, ...currentBookToUpdate.slice(indexToUpdate+1)]
            };
            break;
    
        default:
            return state;
            break;
    }
}

export default bookReducer;