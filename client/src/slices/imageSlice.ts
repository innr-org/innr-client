import { createSlice } from '@reduxjs/toolkit'

export interface ImageState {
    value: string
}

const initialState: ImageState = {
    value: "Empty",
}

export const imageSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        save: (state, data) => {
            state.value = data.payload
        },
        remove: (state) => {
            state.value = ""
        },
    },
})

// Action creators are generated for each case reducer function
export const { save, remove } = imageSlice.actions

export default imageSlice.reducer