import * as cart from '@/constants/cart'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type } = action;

  if (type === cart.ADD_TO_CART) {
    let newState;
    if (state[action.stallId]) {
      newState = {
        ...state,
        [action.stallId]: {
          ...state[action.stallId],
          items: {
            ...state[action.stallId].items,
            [action.itemId]: {
              itemName: action.itemName,
              price: action.price,
              quantity: 1
            }
          }
        }
      }
    }
    else {
      newState = {
        ...state,
        [action.stallId]: {
          stallName: action.stallName,
          items: {
            [action.itemId]: {
              itemName: action.itemName,
              price: action.price,
              quantity: 1
            }
          }
        }
      }
    }
    return newState;
  }

  else if (type === cart.INC_QTY) {
    return {
      ...state,
      [action.stallId]: {
        ...state[action.stallId],
        items: {
          ...state[action.stallId].items,
          [action.itemId]: {
            ...state[action.stallId].items[action.itemId],
            quantity: state[action.stallId].items[action.itemId].quantity + 1
          }
        }
      }
    }
  }

  else if (type === cart.DEC_QTY) {
    return {
      ...state,
      [action.stallId]: {
        ...state[action.stallId],
        items: {
          ...state[action.stallId].items,
          [action.itemId]: {
            ...state[action.stallId].items[action.itemId],
            quantity: state[action.stallId].items[action.itemId].quantity - 1
          }
        }
      }
    }
  }

  return {
    ...state
  }
}

export {
  reducer as cart
}