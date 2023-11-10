import Product from "../models/Product.js";

const productByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ category: categoryId });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unable to reterive Products" });
  }
};

const getByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Product with Id not Found" });
  }
};

export { productByCategory, getByProductId };
