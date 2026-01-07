/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const auctionSlice = createSlice({
  name: 'auction',
  initialState:{
    loading : false,
    auctionItem:{},
    
  }
});

export default auctionSlice.reducer
