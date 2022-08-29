import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const randomData = {"coord":{"lon":77.2167,"lat":28.6667},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":307.2,"feels_like":311.32,"temp_min":307.2,"temp_max":307.2,"pressure":1007,"humidity":49},"visibility":4000,"wind":{"speed":2.57,"deg":40},"clouds":{"all":75},"dt":1661768409,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1661732860,"sunset":1661779030},"timezone":19800,"id":1273294,"name":"Dummy","cod":200} 

export const getData = createAsyncThunk(
    "forecast/getData",
    async (city) => {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cbf35c68554f19c37a23f99e38e2570`).then(
            (res) => res.json()
        );
    }   
)

export const forecastSlice = createSlice({
    name:'forecast',
    initialState:{value:randomData},
    extraReducers:{
        [getData.pending]: (state,action) => {
            state.value = randomData;
        },
        [getData.fulfilled]: (state,action) => {
            state.value = action.payload;
        },
        [getData.rejected]: (state,action) => {
            state.value = randomData;
        }
    }
})

export const {getdata} = forecastSlice.actions

export default forecastSlice.reducer;


