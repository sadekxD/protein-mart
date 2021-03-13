import actionTypes from "./actionTypes";

export const addToCart = (payload) => (dispatch) => {
	dispatch({ type: actionTypes.ADD_TO_CART, payload });
};

export const removeFromCart = (payload) => (dispatch) => {
	dispatch({ type: actionTypes.REMOVE_FROM_CART, payload });
};

export const clearCart = () => (dispatch) => {
	dispatch({
		type: actionTypes.CLEAR_CART,
	});
};

export const updateProductQty = (id, value) => (dispatch) => {
	dispatch({
		type: actionTypes.UPDATE_PRODUCT_QTY,
		payload: { id: id, qty: value },
	});
};
