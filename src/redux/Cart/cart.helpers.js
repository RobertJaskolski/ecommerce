export const existCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find(
    (cartItem) => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExist = existCartItem({ prevCartItems, nextCartItem });
  if (cartItemExist) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID === nextCartItem.documentID
        ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement }
        : { ...cartItem }
    );
  }

  return [...prevCartItems, { ...nextCartItem, quantity: quantityIncrement }];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter(
    (item) => item.documentID !== cartItemToRemove.documentID
  );
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (item) => item.documentID === cartItemToReduce.documentID
  );

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (item) => item.documentID !== cartItemToReduce.documentID
    );
  }
  return prevCartItems.map((item) =>
    item.documentID === existingCartItem.documentID
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : {
          ...item,
        }
  );
};
