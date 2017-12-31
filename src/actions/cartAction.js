export const getAllBooks =  () => {
    return {
        type : "GET_ALL_BOOKS"
    }
};

export const addNewBook =  (newBook) => {
    return {
        type : "ADD_NEW_BOOK",
        payload : newBook
    }
};

export const deleteSingleBook =  (id) => {
    return {
        type : "DELETE_BOOK",
        payload : id
    }
};

export const updateSingleBook =  (book) => {
    return {
        type : "UPDATE_BOOK",
        payload : book
    }
};