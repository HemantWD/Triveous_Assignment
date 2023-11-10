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
      return res.json({ items: [] }); //Empty cart
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to view the cart",
      error,
    });
  }
};

export { addToCart };
