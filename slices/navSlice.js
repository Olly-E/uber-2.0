import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export  const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.timeTravelInformation =  action.payload;
        },
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const travelTimeInformation = (state) => state.nav.travelTime;

export default navSlice.reducer