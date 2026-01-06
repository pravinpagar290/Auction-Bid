import { createSlice } from '@reduxjs/toolkit';

const auctionSlice = createSlice({
  name: 'auction',
  initialState:{
    loading : false,
    auctionItem:{},
    
  }
});
