import request from 'request'

import * as vendors from '@/constants/vendors'
import * as api from '@/constants/api'

export const setVendors = payload => ({
  type: vendors.SET_VENDORS,
  payload
})

export const getVendors = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_VENDORS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  });
}