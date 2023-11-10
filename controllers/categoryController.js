import Category from "../models/Category.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send({
      success: true,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Not able to fetch the categories",
    });
  }
};

export { getCategories };
