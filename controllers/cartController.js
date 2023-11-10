import Cart from "../models/Cart.js";

// Add product to the user cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // find users cart else create a new one
    let userCart = await Cart.findOne({ users: userId });
    if (!userCart) {
      userCart = new Cart({ users: userId, items: [] });
    }

    // check if product is alredy in cart
    const existingItem = userCart.items.find(
      (item) => item.product.toString() === productId
    );
    if (existingItem) {
      // update the item
      existingItem.quantity += quantity;
    } else {
      userCart.items.push({ product: productId, quantity });
    }
    await userCart.save();
    res.status(200).send({
      success: true,
      message: "Cart Updated Successfully",
      userCart,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Unable to add item to cart",
      error,
    });
  }
};

// view the cart
const viewCart = async (req, res) => {
  try {
    const { userId } = req.params;
    // find the user cart and populate product details
    const userCart = await Cart.findOne({ users: userId }).populate(
      "items.product"
    );

    if (!userCart) {
      return res.send({ items: [] }); //Empty cart
    }
    res.status(200).send({
      success: true,
      userCart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to view the cart",
      error,
    });
  }
};

// update the quantity of a product
const updateQuantity = async (req, res) => {
  try {
    const { cartItemId, quantity } = req.body;
    const { userId } = req.user;
    // making sure the owner is making the request
    const updateCart = await Cart.findOneAndUpdate(
      {
        "items._id": cartItemId,
        users: userId,
      },
      { $set: { "items.$.quantity": quantity } }
    );

    if (!updateCart) {
      res.status(403).send({
        success: false,
        message: "You are not authorized to update the cart ",
      });

      res.status(200).send({
        success: true,
        message: "Cart item updated Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to update the cart",
      error,
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { userId } = req.user;

    // Making sure that user is making the request to remove the item
    const removeCart = await Cart.findByIdAndUpdate(
      { "items._id": cartItemId, user: userId },
      { $pull: { items: { _id: cartItemId } } }
    );
    if (!removeCart) {
      return res.status(403).send({
        success: false,
        message: "You are not authorized to perform this functionality",
      });
    }
    res.status(200).send({
      success: true,
      message: "Product removed from the cart ",
      removeCart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to remove the product from the cart",
      error,
    });
  }
};

export { addToCart, viewCart, updateQuantity, removeFromCart };
