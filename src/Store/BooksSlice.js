import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import db from "../Config/Firebase";

export const addBookToFirestore = createAsyncThunk(
    'books/addBookToFirestore',
    async (book)=>{
        const addBookRef = await addDoc(collection(db, 'DadosDev'), book);
        const newBook = {id: addBookRef.id, book};
        return newBook;
    }
);
 const booksSlice = createSlice({
    name: 'DadosDev',
    initialState: {
        DadosArray:[],

    },
    
    //reducers: {

    //},
    extraReducers: (builder)  => {
        builder
        .addCase(addBookToFirestore.fulfilled,(state,action)=>{
            state.DadosArray.push(action.payload);
        })
    }
});

export default booksSlice.reducer;