import request from 'request'

import * as profshows from '@/constants/profshows'
import * as api from '@/constants/api'

export const setAllProfshows = (showsData) => ({
  type: profshows.SET_ALL_PROFSHOWS,
  payload: showsData
});

export const getAllProfshows = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_ALL_PROFSHOWS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }
  }, function (error, response, body) {
    let profshowsData = JSON.parse(body);
    dispatch(setAllProfshows(profshowsData));
  });
}

export const buyTickets = () => (dispatch, getState) => {
  let showsCart = getState().profshows.showsCart;
  request({
    method: 'POST',
    url: api.BUY_TICKETS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify(showsCart)
  }, function (error, response, body) {
      console.log(body);
  });
}

export const increaseComboQty = (id) => ({
  type: profshows.INC_COMBO_QTY,
  id
});

export const decreaseComboQty = (id) => ({
  type: profshows.DEC_COMBO_QTY,
  id
});

export const increaseShowQty = (id) => ({
  type: profshows.INC_SHOW_QTY,
  id
});

export const decreaseShowQty = (id) => ({
  type: profshows.DEC_SHOW_QTY,
  id
});