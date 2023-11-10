import mongoose from "mongoose";
import Product from "./models/Product.js";
import Category from "./models/Category.js";

mongoose.connect(
  "mongodb+srv://Hemant:livelong123@cluster0.w8dp0gl.mongodb.net/triveous",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", async () => {
  console.log("Connected to MongoDB");
  try {
    const category1 = new Category({ name: "Electronics" });
    const category2 = new Category({ name: "Clothing" });
    const category3 = new Category({ name: "Health" });
    await category1.save();
    await category2.save();
    await category3.save();

    // create products
    const product1 = new Product({
      title: "Smartphone",
      price: "15000",
      description: "Flag-ship Phone",
      category: category1._id,
    });
    const product2 = new Product({
      title: "T-shirt",
      price: "1500",
      description: "Slim-fit T-shirt",
      category: category2._id,
    });
    const product3 = new Product({
      title: "M-Blaze Protein",
      price: "10000",
      description: "Best in the Market",
      category: category3._id,
    });
    await product1.save();
    await product1.save();
    await product1.save();

    console.log("Data added in the database");
  } catch (error) {
    console.log("Error in sending dummy data", error);
  } finally {
    mongoose.connection.close();
  }
});
